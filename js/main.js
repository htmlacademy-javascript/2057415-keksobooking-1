import './card.js';
import './form.js';
import './map.js';
import './filter.js';
import './form-slider.js';
import './api.js';
import './success-error-message.js';
import './upload-images.js';
import {disableForms, enableForms} from './disabler-form.js';
import {getData} from './api.js';
import {createMarker} from './map.js';
import {setFilterOffersContent, filterSimilarOffersNear} from './filter.js';

disableForms();
getData(
  (offer) => {
    enableForms();
    const filteredOffers = filterSimilarOffersNear(offer);
    createMarker(filteredOffers);
    setFilterOffersContent(offer);
  }
);
