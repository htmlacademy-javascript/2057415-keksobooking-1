const adForm = document.querySelector('.ad-form');
const adFormElement = adForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterElement = mapFilter.querySelectorAll('select, fieldset');

const disableAdForm = () => {
  adForm.classList.add('ad-form--disabled');

  adFormElement.forEach((element) => {
    element.disabled = true;
  });
};

const disableMapFilter = () => {
  mapFilter.classList.add('map__filters--disabled');

  mapFilterElement.forEach((element) => {
    element.disabled = true;
  });
};

const enableAdForm = () => {
  adForm.classList.remove('ad-form--disabled');

  adFormElement.forEach((element) => {
    element.disabled = false;
  });
};

const enableMapFilter = () => {
  mapFilter.classList.remove('map__filters--disabled');

  mapFilterElement.forEach((element) => {
    element.disabled = false;
  });
};

const disableForms = () => {
  disableAdForm();
  disableMapFilter();
};

const enableForms = () => {
  enableAdForm();
  enableMapFilter();
};

export {disableForms, enableForms};
