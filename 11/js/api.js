import {showAlert} from './success-error-message.js';

const GET_DATA_URL = 'https://28.javascript.pages.academy/keksobooking/data';
const SEND_DATA_URL = 'https://28.javascript.pages.academy/keksobooking';
const POST = 'POST';

function getData(onSuccess) {
  fetch(GET_DATA_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Не удалось загрузить данные. Попробуйте ещё раз');
      }
    })
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(() => {
      throw new Error('Data not correct');
    });
}

function sendData(formData, onSuccess, onError) {
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
      throw new Error('Server is not responding');
    })
    .then((data) => {
      if (onSuccess) {
        onSuccess(data);
      }
    })
    .catch(() => {
      if (onError) {
        onError();
        return;
      }
      throw new Error('Server is not responding');
    });
}

export {getData, sendData};
