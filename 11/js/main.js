import './card.js';
import './disabler-form.js';
import './form.js';
import './map.js';
import './filter.js';
import './form-slider.js';
import './api.js';
import './success-error-message.js';
import './upload-images.js';
import {disableForms, enableForms} from './disabler-form';
import {sendData, getData} from './api.js';
import {markerGroup} from './map.js';
import {setFilterAdsContent} from './filter.js';

const OFFER_COUNT = 10;

disableForms();
getData(
  (offer) => {
    const offersLimit = offer.slice(0, OFFER_COUNT);
    enableForms();
    markerGroup(offersLimit);
    setFilterAdsContent(offersLimit);
  }
);

sendData();
