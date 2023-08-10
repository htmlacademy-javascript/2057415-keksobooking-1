const getRandomNumber = (minValue, maxValue, numberPoint) => {
  if (minValue < 0 || maxValue < 0) {
    return 'Ошибка ввода данных. Значение не может быть меньше 0';
  }

  if (maxValue < minValue) {
    [minValue, maxValue] = [maxValue, minValue];
  }

  const randomNumber = minValue + Math.random() * (maxValue - minValue);

  return Number(randomNumber.toFixed(numberPoint));
};

const getRandomArray = (items) => {
  const arrLength = getRandomNumber(0, items.length - 1);
  const result = [];

  if(arrLength === 0) {
    return result;
  }

  while (result.length < arrLength) {
    const item = items[getRandomNumber(0, items.length - 1)];
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

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

// Расчет координат
const CALCULATION_LAT = () => getRandomNumber(35.65000, 35.70000, 5);

const CALCULATION_LNG = () => getRandomNumber(139.70000, 139.80000, 5);

const formatNumber = (number) => (number < 10) ? `0${number}` : number;

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

// Отключает eslint на объявленную, но не использованную переменную
// eslint-disable-next-line
const myHouse = Array.from({length: ARRAY_COUNT}, createData);
