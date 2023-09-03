const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const disabledFields = document.querySelectorAll('select.map__filetr, fieldset');
const disabledMapFilter = () => {
  disabledFields.forEach((element) => {
    element.disabled = !element.disabled;
  });
};

const toggleAdForm = () => {
  adForm.classList.toggle('ad-form--disabled');
  mapFilter.classList.toggle('map__filters--disabled');
  disabledMapFilter();
};

toggleAdForm();
