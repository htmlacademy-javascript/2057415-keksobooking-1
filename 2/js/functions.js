//Первая функция: Палиндром
function isPalindrom (string) {
  for (let i = 0, j = string.length - 1; i < j; i++, j--) {
    if(string[i] !== string[j]) {
      return false;
    }
  }
  return true;
}
isPalindrom ('кекс');

//Вторая функция: Извлечение цифр
const numberFunction = (string) => {
  let selection = '';
  for(let i = 0; i <= string.length; i++){
    if(!isNaN(string[i]) && string[i] !== ' '){
      selection += parseInt(string[i], 10);
    }
  }
  return parseInt(selection, 10);
};
numberFunction('1 кефир, 0.5 батона');


//Третья функция, которая возвращает исходную строку, дополненную указанными символами до заданной длины
function symbolFunction (initialString, minimalLength, addSymbol) {
  const resultAdd = minimalLength - initialString.length;
  if (resultAdd <= 0) {
    return initialString;
  }

  const repeatCount = Math.floor(resultAdd / addSymbol.length);
  const endLength = resultAdd % addSymbol.length;
  return addSymbol.slice(0, endLength) + addSymbol.repeat(repeatCount) + initialString;
}
symbolFunction('q', 4, 'we');


//Четвертая функция (Кексобукинг), возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function randomNumberFunction (minValue, maxValue, numberPoint) {
  if (maxValue < minValue) {
    [minValue, maxValue] = [maxValue, minValue];
  }

  if (minValue < 0 || maxValue < 0) {
    return 'Ошибка ввода данных. Значение не может быть меньше 0';
  }

  const randomNumber = minValue + Math.random() * (maxValue - minValue);

  return Number(randomNumber.toFixed(numberPoint));
}

randomNumberFunction(100, 200, 2);
