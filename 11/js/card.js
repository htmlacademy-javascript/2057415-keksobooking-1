//import { getRandomMeHouseDreamArray } from './data.js';
//import { getRandomNumber } from './utils.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const typesHouseObj = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const generateCard = ({ author, offer }) => {
  const cardElement = cardTemplate.cloneNode(true);
  const popupTitle = cardElement.querySelector('.popup__title');
  const popupAdress = cardElement.querySelector('.popup__text--address');
  const popupPrice = cardElement.querySelector('.popup__text--price');
  const popupType = cardElement.querySelector('.popup__type');
  const popupCapacity = cardElement.querySelector('.popup__text--capacity');
  const popupTime = cardElement.querySelector('.popup__text--time');
  const popupFeaturesList = cardElement.querySelector('.popup__features');
  const popupDescription = cardElement.querySelector('.popup__description');
  const userPhotoList = cardElement.querySelector('.popup__photos');
  const userPhoto = cardElement.querySelector('.popup__photo');
  popupTitle.textContent = offer.title;
  popupAdress.textContent = offer.address;
  popupPrice.textContent = `${offer.price}₽/ночь`;
  popupType.textContent = typesHouseObj[offer.type];
  popupCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  popupTime.textContent = `Заезд после ${offer.checkin} выезд до ${offer.checkout}`;
  const featuresLength = popupFeaturesList.children.length;
  for (let i = 0; i < featuresLength; i++) {
    popupFeaturesList.removeChild(cardElement.querySelector('.popup__feature'));
  }
  if (!offer.features?.length) {
    popupFeaturesList.classList.add('visually-hidden');
  } else {
    for (let i = 0; i < offer.features.length; i++) {
      const feature = document.createElement('li');
      popupFeaturesList.appendChild(feature);
      feature.classList.add('popup__feature', `popup__feature--${offer.features[i]}`);
    }
  }
  if (offer.description !== undefined) {
    popupDescription.textContent = offer.description;
  } else {
    popupDescription.classList.add('visually-hidden');
  }
  cardElement.querySelector('.popup__photos').removeChild(userPhoto);
  if (offer.photos?.length) {
    for (let i = 0; i < offer.photos.length; i++) {
      const userPhotoCloned = userPhoto.cloneNode(true);
      userPhotoCloned.src = offer.photos[i];
      userPhotoList.appendChild(userPhotoCloned);
    }
  } else {
    userPhotoList.classList.add('visually-hidden');
  }
  cardElement.querySelector('.popup__avatar').src = author.avatar;
  const parentElement = document.querySelector('#map-canvas');
  parentElement.appendChild(cardElement);
  return cardElement;
};

//const offers = getRandomMeHouseDreamArray;

//generateCard(offers[getRandomNumber(0, offers.length - 1)]);

export {generateCard};
