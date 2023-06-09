"use strict";

// Четвертая задача:
// Создайте файл task04.js
// Необходимо написать функцию, которая принимает 2 параметра n и m
// И возвращает массив с високосными годами в диапазоне между n и m
// Алгоритм определения високосного года следует найти в интернете самостоятельно или спросите у куратора
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

const leapYear = (n, m) => {
  if (n > m) {
    let x = m;
    m = n;
    n = x;
  }

  const newArr = [];
  if (n < 0 || m < 0) {
    return "Неправильно введены даты";
  } else {
    for (let i = n; i < m; i++) {
      if ((i % 4 === 0 && i % 100 !== 0) || (i % 100 === 0 && i % 400 === 0)) {
        newArr.push(i);
      }
    }
    return newArr;
  }
};
console.log(leapYear(122, 35));
