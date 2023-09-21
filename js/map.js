import {generateCard} from './card.js';
import {enableForms} from './disabler-form.js';
import {getData} from './api.js';

const ICONSIZE = [52, 52];
const DEFAULT_LATITUDE = 35.6895;
const DEFAULT_LONGITUDE = 139.692;
const DEFAULT_TILE = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPY_RIGHT_OPENSTREETMAP = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
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
    attribution: COPY_RIGHT_OPENSTREETMAP,
  },
).addTo(MAP);

// Отрисовка главной метки выбора адреса
function createMainMarker (checkValidation) {
  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: ICONSIZE,
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

  mainPinMarker.addTo(MAP);

  // Фиксирование координат главной метки и передача в поле адреса
  const address = document.querySelector('#address');

  function getAddressCoordinates (coordinates) {
    address.value = `lat: ${(coordinates.lat).toFixed(ROUND_COORDINATE)}, lng: ${(coordinates.lng).toFixed(ROUND_COORDINATE)}`;
  }

  mainPinMarker.on('moveend', (evt) => {
    const point = evt.target.getLatLng();
    getAddressCoordinates (point);
  });

  const resetButton = document.querySelector('.ad-form__reset');

  mainPinMarker.on('change', () => {
    checkValidation(address);
  });

  // Вернуть масштаб и положение метки
  resetButton.addEventListener('click', () => {
    mainPinMarker.setLatLng({
      lat: DEFAULT_LATITUDE,
      lng: DEFAULT_LONGITUDE,
    });

    MAP.setView({
      lat: DEFAULT_LATITUDE,
      lng: DEFAULT_LONGITUDE,
    }, 10);
  });
}
createMainMarker ();

// Отрисовка предложений
const markerGroup = L.layerGroup().addTo(MAP); // слой для меток

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function createMarker(points) {
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
}

initializationMapStreet();

getData(createMarker);
//createMarker(offers);

export {createMarker};
