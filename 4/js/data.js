import {
  getRandomNumber,
  getRandomArray,
  formatNumber,
  CALCULATION_LAT,
  CALCULATION_LNG
} from './math.js';

const ARRAY_COUNT = 10;
const CHECK_IN = ['12:00', '13:00', '14:00'];
const CHECK_OUT = ['12:00', '13:00', '14:00'];

// Массивы со случайными данными
const OFFER_TITLES = ['Квартира в прекрасном районе Санкт-Петербурга', 'Квартира в районе Патриарших прудов', 'Квартира в пешей доступности от метро Измайловская'];
const TYPE_HOUSES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ADD_CHIPS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const SPECIFICATIONS = ['Хорошая квартира', 'Квартира в ужасном состоянии', 'Уютная студия'];
const REAL_ESTATE_PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const createData = (_, index) => {
  const location = { lat: CALCULATION_LAT(), lng: CALCULATION_LNG() };
  return {
    author: {
      avatar: `img/avatars/user${formatNumber(index)}.png`
    },
    offer: {
      title: OFFER_TITLES[getRandomNumber(0, OFFER_TITLES.length - 1)],
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(1, 50000),
      type: TYPE_HOUSES[getRandomNumber(0, TYPE_HOUSES.length - 1)],
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 9),
      checkin: CHECK_IN[getRandomNumber(0, CHECK_IN.length - 1)],
      checkout: CHECK_OUT[getRandomNumber(0, CHECK_OUT.length - 1)],
      features: getRandomArray(ADD_CHIPS),
      description: SPECIFICATIONS[getRandomNumber(0, SPECIFICATIONS.length - 1)],
      photos: getRandomArray(REAL_ESTATE_PHOTOS),
    },
    location
  };
};

const getRandomMeHouseDreamArray = Array.from({length: ARRAY_COUNT}, createData);

export {getRandomMeHouseDreamArray};
