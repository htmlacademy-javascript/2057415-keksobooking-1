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
const resetButton = document.querySelector('.ad-form__reset');
const address = document.querySelector('#address');

export {
  ARRAY_COUNT,
  CHECK_IN,
  CHECK_OUT,
  OFFER_TITLES,
  TYPE_HOUSES,
  ADD_CHIPS,
  SPECIFICATIONS,
  REAL_ESTATE_PHOTOS,
  resetButton,
  address
};
