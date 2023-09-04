const adForm = document.querySelector('.ad-form');
const adFormElement = adForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterElement = mapFilter.querySelectorAll('select, fieldset');
const adFilterElement = adFormElement.concat(mapFilterElement);

const disableForms = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');

  adFilterElement.forEach((element) => {
    element.disabled = true;
  });
};

const enableForms = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');

  adFilterElement.forEach((element) => {
    element.disabled = false;
  });
};

/*
const disabledAdForm = () => {
  adForm.classList.add('ad-form--disabled');

  adFormElement.forEach((element) => {
    element.disabled = true;
  });
};

const disabledMapFilter = () => {
  mapFilter.classList.add('map__filters--disabled');

  mapFilterElement.forEach((element) => {
    element.disabled = true;
  });
};

const enabledAdForm = () => {
  adForm.classList.remove('ad-form--disabled');

  adFormElement.forEach((element) => {
    element.disabled = false;
  });
};

const enabledMapFilter = () => {
  mapFilter.classList.remove('map__filters--disabled');

  mapFilterElement.forEach((element) => {
    element.disabled = false;
  });
};
*/

export {disableForms, enableForms};
