import {showAlert} from './success-error-message.js';

const ApiUrls = {
  ROOT: 'https://28.javascript.pages.academy/keksobooking',
  DATA: 'https://28.javascript.pages.academy/keksobooking/data'
};

const getData = (onSuccess) => {
  fetch(ApiUrls.DATA)
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
};

const sendData = (formData, onSuccess, onError) => {
  fetch(ApiUrls.ROOT,
    {
      method: 'POST',
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
};

export {getData, sendData};
