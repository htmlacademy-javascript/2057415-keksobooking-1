// Настройка слайдера
import {TYPE_TO_MIN_PRICE, adFormType, adFormPrice} from './form.js';
import {resetButton} from './const.js';

const sliderElement = document.querySelector('.ad-form__slider');

const createSlider = () => {

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100000,
    },
    start: TYPE_TO_MIN_PRICE[adFormType.value],
    step: 1000,
    connect: 'lower',
    format: {
      to: function (value) {
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  // Синхронизация поля ввода и слайдера
  sliderElement.noUiSlider.on('slide' , () => {
    adFormPrice.value = sliderElement.noUiSlider.get();
  });

  // Изменение минимального значения слайдера
  adFormType.addEventListener('change', (evt) => {
    if (evt.target.value === 'bungalow') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100000,
        },
        step: 1000,
      });
    }
    if (evt.target.value === 'flat') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1000,
          max: 100000,
        },
        step: 1000,
      });
    }
    if (evt.target.value === 'hotel') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 3000,
          max: 100000,
        },
        step: 1000,
      });
    }
    if (evt.target.value === 'house') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 5000,
          max: 100000,
        },
        step: 1000,
      });
    }
    if (evt.target.value === 'palace') {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 10000,
          max: 100000,
        },
        step: 1000,
      });
    }
  });
};

//const resetSliderValue = () => {
resetButton.addEventListener ('click', () => {
  sliderElement.noUiSlider.reset();
});
//};
/*
const resetSliderValue = () => {
  sliderElement.noUiSlider.reset();
};
*/
createSlider();

export {createSlider};
