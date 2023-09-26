const ALERT_SHOW_TIME = 5000;

const successTemplate = document.querySelector('#success').content;
const successMessage = successTemplate.querySelector('.success');
const errorTemplate = document.querySelector('#error').content;
const errorMessage = errorTemplate.querySelector('.error');

function showAlert (message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '1000';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '10%';
  alertContainer.style.top = '50%';
  alertContainer.style.right = '10%';
  alertContainer.style.padding = '30px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ffb8c6';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const getSuccessErrorMessage = () => {

  const isEscapeKey = (evt) => evt.key === 'Escape';

  const onSuccessMessageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successMessage.remove();
    }
  };

  const onErrorMessageEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorMessage.remove();
    }
  };

  const getSuccessMessage = () => {
    document.body.append(successMessage);
    document.addEventListener('keydown', onSuccessMessageEscKeydown);
    document.addEventListener('click', () => {
      successMessage.remove();
    });
  };

  const getErrorMessage = () => {
    document.body.append(errorMessage);
    document.addEventListener('keydown', onErrorMessageEscKeydown);
    document.addEventListener('click', () => {
      errorMessage.remove();
    });
  };

  return {getSuccessMessage, getErrorMessage};
};

export {showAlert, getSuccessErrorMessage};
