"use strict";

// Вторая задача:
// Напишите функцию getAverageValue
// для получения среднеарифметического значения
// с округлением в меньшую сторону до целого числа
// С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:
{
  const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
  let sum = 0;

  const getAverageValue = (arr) => {
    for (const i of arr) {
      sum += i;
    }
    return sum / arr.length;
  };

  console.log(getAverageValue(allСashbox));
}
