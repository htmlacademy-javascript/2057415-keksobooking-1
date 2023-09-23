import {markerGroup} from './map.js';
import {generateCard} from './card.js';
import {debounce} from './debounce.js';

const FILTER_PRICE_VALUES = {
  low: 10000,
  high: 50000
};

const DEBOUNCE_TIMEOUT_DELAY = 500;
const mapFiltersElement = document.querySelector('.map__filters');
const housingTypeElement = mapFiltersElement.querySelector('#housing-type');
const housingPriceElement = mapFiltersElement.querySelector('#housing-price');
const housingRoomsElement = mapFiltersElement.querySelector('#housing-rooms');
const housingGuestsElement = mapFiltersElement.querySelector('#housing-guests');
const housingFeaturesElements = mapFiltersElement.querySelectorAll('.map__checkbox');

const getFilterOfferType = (offer, type) => type === 'any' || offer.offer.type === type;

const getFilterOfferPrice = (offer, price) => {
  switch (price) {
    case 'any':
      return true;
    case 'low':
      return offer.offer.price < FILTER_PRICE_VALUES.low;
    case 'middle':
      return offer.offer.price >= FILTER_PRICE_VALUES.low && offer.offer.price <= FILTER_PRICE_VALUES.high;
    case 'high':
      return offer.offer.price > FILTER_PRICE_VALUES.high;
  }
};

const getFilterOfferRoomsCount = (offer, roomsCount) => roomsCount === 'any' || offer.offer.rooms === Number(roomsCount);

const getFilterOfferGuestsCount = (offer, guestsCount) => guestsCount === 'any' || offer.offer.guests === Number(guestsCount);

const getFilterOfferFeatures = (offer, features) => {
  if (!features.length) {
    return true;
  }

  if (!offer.offer.features) {
    return false;
  }

  return features.every((feature) => offer.offer.features.includes(feature));
};

const getSelectedFeatures = (features) => {
  const selectedFeaturesValues = [];
  Array.from(features).forEach((feature) => {
    if (feature.checked) {
      selectedFeaturesValues.push(feature.value);
    }
  });

  return selectedFeaturesValues;
};

const filterSimilarOffersNear = (offers) => {
  const filteredOffers = [];

  for (const offer of offers) {
    if (
      getFilterOfferType(offer, housingTypeElement.value) &&
      getFilterOfferPrice(offer, housingPriceElement.value) &&
      getFilterOfferRoomsCount(offer, housingRoomsElement.value) &&
      getFilterOfferGuestsCount(offer, housingGuestsElement.value) &&
      getFilterOfferFeatures(offer, getSelectedFeatures(housingFeaturesElements))
    ) {
      filteredOffers.push(offer);
    }
  }
  return filteredOffers;
};

const mapFilterHandler = (offers) => {
  markerGroup.clearLayers();
  generateCard(filterSimilarOffersNear(offers));
};

const setFilterOffersContent = (offers) => {
  mapFiltersElement.addEventListener('change', debounce(() => mapFilterHandler(offers), DEBOUNCE_TIMEOUT_DELAY));
};

export {setFilterOffersContent};
