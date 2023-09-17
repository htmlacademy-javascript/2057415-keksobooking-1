import {showAlert} from './success-error-message.js';

const GET_DATA_URL = 'https://28.javascript.pages.academy/keksobooking/data';
const SEND_DATA_URL = 'https://28.javascript.pages.academy/keksobooking';
const POST = 'POST';

function getData (onSuccess) {
  fetch(GET_DATA_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Не удалось загрузить данные. Попробуйте ещё раз');
      }
    })
    .then(onSuccess)
    .catch(() => {
      new Error('Data not correct');
    });
}

function sendData (onSuccess, formData) {
  fetch(SEND_DATA_URL,
    {
      method: POST,
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    })
    .then (onSuccess)
    .catch(() => {
      new Error('Server is not responding');
    });
}

export {getData, sendData};
