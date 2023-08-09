const getRandomFractionNumber = (minValue, maxValue, numberPoint) => {
  if (maxValue < minValue) {
    [minValue, maxValue] = [maxValue, minValue];
  }

  if (minValue < 0 || maxValue < 0) {
    return 'Ошибка ввода данных. Значение не может быть меньше 0';
  }

  const randomNumber = minValue + Math.random() * (maxValue - minValue);

  return Number(randomNumber.toFixed(numberPoint));
};

function getRandomNumber (min, max) {
  if (max < min) {
    [min, max] = [max, min];
  }

  if (min < 0 || max < 0) {
    return 'Ошибка ввода данных. Значение не может быть меньше 0';
  }

  return Math.round(min + Math.random() * (max - min));
}

const checkIn = ['12:00', '13:00', '14:00'];
const checkOut = ['12:00', '13:00', '14:00'];

// Массивы со случайными данными
const OFFER_TITLES = ['Квартира в прекрасном районе Санкт-Петербурга', 'Квартира в районе Патриарших прудов', 'Квартира в пешей доступности от метро Измайловская'];
const TYPE_HOUSE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ADD_CHIPS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const SPECIFICATION = ['Хорошая квартира', 'Квартира в ужасном состоянии', 'Уютная студия'];
const REAL_ESTATE_PHOTO = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

// Расчет координат
const calculationLat = () => {
  getRandomFractionNumber(35.65000, 35.70000, 5);
};

const calculationLng = () => {
  getRandomFractionNumber(139.70000, 139.80000, 5);
};

const formatNumber = (number) => (number < 10) ? `0${number}` : number;
formatNumber();

const createData = (index) => {
  const location = { lat: calculationLat (), lng: calculationLng () };
  return {
    author: {
      avatar: `img/avatars/user${formatNumber(index)}.png`
    },
    offer: {
      title: OFFER_TITLES[getRandomNumber(0, OFFER_TITLES.length - 1)],
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(1, 50000),
      type: TYPE_HOUSE[getRandomNumber(0, TYPE_HOUSE.length - 1)],
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 9),
      checkin: checkIn[getRandomNumber(0, checkIn.length - 1)],
      checkout: checkOut[getRandomNumber(0, checkOut.length - 1)],
      features: ADD_CHIPS[getRandomNumber(0, ADD_CHIPS.length - 1)],
      description: SPECIFICATION[getRandomNumber(0, SPECIFICATION.length - 1)],
      photos: REAL_ESTATE_PHOTO.slice(0, getRandomNumber(0, REAL_ESTATE_PHOTO.length - 1)),
    },
    location
  };
};

Array.from({length: 10}, createData);
