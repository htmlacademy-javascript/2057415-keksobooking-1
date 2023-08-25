import {
  getRandomNumber,
  getRandomArray,
  formatNumber,
} from './utils.js';

import {
  ARRAY_COUNT,
  CHECK_IN,
  CHECK_OUT,
  OFFER_TITLES,
  TYPE_HOUSES,
  ADD_CHIPS,
  SPECIFICATIONS,
  REAL_ESTATE_PHOTOS
} from './const.js';

const calculationLat = () => getRandomNumber(35.65000, 35.70000, 5);

const calculationLng = () => getRandomNumber(139.70000, 139.80000, 5);

const createData = (_, index) => {
  const location = { lat: calculationLat(), lng: calculationLng() };
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
