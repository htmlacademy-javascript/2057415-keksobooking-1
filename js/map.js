import {generateCard} from './card.js';
import {enableForms} from './disabler-form.js';
import {address} from './const.js';

const ICON_SIZE = [52, 52];
const DEFAULT_LATITUDE = 35.6895;
const DEFAULT_LONGITUDE = 139.692;
const DEFAULT_TILE = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT_OPENSTREETMAP = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const MAP = L.map('map-canvas');
// Настройка карты leaflet
const ROUND_COORDINATE = 5;
// Создание карты
const initializationMapStreet = () => {
  MAP.on('load', () => {
  //console.log('Карта инициализирована');
    enableForms();
  });
  MAP.setView({
    lat: DEFAULT_LATITUDE,
    lng: DEFAULT_LONGITUDE,
  }, 12);
};

// Отрисовка карты OpenStreetMap
L.tileLayer(
  DEFAULT_TILE,
  {
    attribution: COPYRIGHT_OPENSTREETMAP,
  },
).addTo(MAP);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: ICON_SIZE,
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: DEFAULT_LATITUDE,
    lng: DEFAULT_LONGITUDE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
//Сброс настроек карты до начальных значений
const resetMap = () => {
  mainPinMarker.setLatLng({
    lat: DEFAULT_LATITUDE,
    lng: DEFAULT_LONGITUDE,
  });

  MAP.setView({
    lat: DEFAULT_LATITUDE,
    lng: DEFAULT_LONGITUDE,
  }, 12);

  MAP.closePopup();
};

// Отрисовка главной метки выбора адреса
const createMainMarker = (checkValidation) => {

  mainPinMarker.addTo(MAP);

  // Фиксирование координат главной метки и передача в поле адреса

  const getAddressCoordinates = (coordinates) => {
    address.value = `${(coordinates.lat).toFixed(ROUND_COORDINATE)}, ${(coordinates.lng).toFixed(ROUND_COORDINATE)}`;
  };

  mainPinMarker.on('moveend', (evt) => {
    const point = evt.target.getLatLng();
    getAddressCoordinates (point);
  });

  mainPinMarker.on('change', () => {
    checkValidation(address);
  });
};

createMainMarker ();

// Отрисовка предложений
const markerGroup = L.layerGroup().addTo(MAP); // слой для меток

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const createMarker = (points) => {
  points.forEach((point) => {
    const {location: {lat, lng}} = point;
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon: pinIcon,
      },
    );

    marker
      .addTo(markerGroup)
      .bindPopup(generateCard(point));
  });
};

initializationMapStreet();

export {createMarker, markerGroup, resetMap, MAP};
