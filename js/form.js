import {sendData} from './api.js';
import {getSuccessErrorMessage} from './success-error-message.js';
import {resetPreviews} from './upload-images.js';
import {resetMap, MAP} from './map.js';
import {resetSliderValue, createSlider} from './form-slider.js';
import {resetFilters} from './filter.js';

const adForm = document.querySelector('.ad-form');
const MIN_SYMBOLS_VALUE = 30;
const MAX_SYMBOLS_VALUE = 100;
const MAX_PRICE = 100000;
const config = {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'error__message'
};

const TYPE_TO_MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const roomsToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const pristine = new Pristine(adForm, config, true);

const adFormTitle = adForm.querySelector('#title');
const adFormRoomNumber = adForm.querySelector('#room_number');
const adFormCapacity = adForm.querySelector('#capacity');
const adFormType = adForm.querySelector('#type');
const adFormPrice = adForm.querySelector('#price');
const adFormTimeIn = adForm.querySelector('#timein');
const adFormTimeOut = adForm.querySelector('#timeout');
const adFormTimeinAndTimeout = adForm.querySelector('.ad-form__element--time');
const adFormSubmit = adForm.querySelector('.ad-form__submit');
const adFormReset = document.querySelector('.ad-form__reset');
const {getSuccessMessage, getErrorMessage} = getSuccessErrorMessage();

const onTypeChange = () => {
  pristine.validate(adFormPrice);
  pristine.validate(adFormType);
};

const onCapacityChange = () => {
  pristine.validate(adFormCapacity);
  pristine.validate(adFormRoomNumber);
};

adFormPrice.addEventListener('change', onTypeChange);
adFormType.addEventListener('change', onTypeChange);
adFormCapacity.addEventListener('change', onCapacityChange);
adFormRoomNumber.addEventListener('change', onCapacityChange);

//Заголовок объявления
const validateTitleLength = (value) => value.length >= MIN_SYMBOLS_VALUE && value.length <= MAX_SYMBOLS_VALUE;
pristine.addValidator(adFormTitle, validateTitleLength, `Введите от ${MIN_SYMBOLS_VALUE} до ${MAX_SYMBOLS_VALUE} символов`);

//Цена за ночь
const validatePriceMax = (value) => value >= 0 && value <= MAX_PRICE;
pristine.addValidator(adFormPrice, validatePriceMax, `Значение цены от 0 до ${MAX_PRICE} руб.`);

const typeToPricePlaceholder = () => {
  adFormPrice.placeholder = TYPE_TO_MIN_PRICE[adFormType.value];
  return true;
};

pristine.addValidator(adFormPrice, typeToPricePlaceholder, 'this');

const validateTypeToMinPrice = (value) => value >= TYPE_TO_MIN_PRICE[adFormType.value];

pristine.addValidator(adFormPrice, validateTypeToMinPrice, 'Слишком маленькая цена');

const validateCapacity = () => roomsToGuests[adFormRoomNumber.value].includes(adFormCapacity.value);

const getFaultMessage = () => {
  if (adFormRoomNumber.value === '100') {
    return '100 комнат не для гостей';
  } if (adFormCapacity.value === '0') {
    return `В ${adFormRoomNumber.value} ${adFormRoomNumber.value === '1' ? 'комнате' : 'комнатах'} должен кто-то проживать`;
  } else {
    return `В
      ${adFormRoomNumber.value} ${adFormRoomNumber.value === '1' ? 'комнате' : 'комнатах'} нельзя разместить
      ${adFormCapacity.value.toLowerCase()} гостей`;
  }
};

pristine.addValidator(adFormCapacity, validateCapacity, getFaultMessage);

//Время заезда и время выезда
adFormTimeinAndTimeout.addEventListener('change', (evt) => {
  if (evt.target.value) {
    adFormTimeOut.value = adFormTimeIn.value = evt.target.value;
  }
});

//Отправка данных
const blockSubmitButton = () => {
  adFormSubmit.disabled = true;
  adFormSubmit.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  adFormSubmit.disabled = false;
  adFormSubmit.textContent = 'Опубликовать';
};

const clearFormAndMap = () => {
  adForm.reset();
  resetPreviews();
  resetMap();
  MAP.closePopup();
  resetSliderValue();
  resetFilters();
};

const onSuccess = () => {
  getSuccessMessage ();
  unblockSubmitButton();
  clearFormAndMap();
};

const onError = () => {
  getErrorMessage();
  unblockSubmitButton();
};

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton ();
    const formData = new FormData(evt.target);
    sendData(formData, onSuccess, onError);
  } else {
    getErrorMessage ();
  }
});

adFormReset.addEventListener('click', clearFormAndMap);

createSlider();

export {TYPE_TO_MIN_PRICE, adFormType, adFormPrice};
