const getRandomNumber = (minValue, maxValue, numberPoint) => {
  if (minValue < 0 || maxValue < 0) {
    return 'Ошибка ввода данных. Значение не может быть меньше 0';
  }

  if (maxValue < minValue) {
    [minValue, maxValue] = [maxValue, minValue];
  }

  const randomNumber = minValue + Math.random() * (maxValue - minValue);

  return Number(randomNumber.toFixed(numberPoint));
};

const getRandomArray = (items) => {
  const arrLength = getRandomNumber(0, items.length - 1);
  const result = [];

  if(arrLength === 0) {
    return result;
  }

  while (result.length < arrLength) {
    const item = items[getRandomNumber(0, items.length - 1)];
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

const formatNumber = (number) => (number < 10) ? `0${number}` : number;

const CALCULATION_LAT = () => getRandomNumber(35.65000, 35.70000, 5);

const CALCULATION_LNG = () => getRandomNumber(139.70000, 139.80000, 5);

export {
  getRandomNumber,
  getRandomArray,
  formatNumber,
  CALCULATION_LAT,
  CALCULATION_LNG
};
