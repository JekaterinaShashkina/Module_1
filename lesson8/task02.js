"use strict";
// Скопируйте код task01.js в task02.js
// Продолжаем работать с предыдущей функцией
// Функция принимает еще два параметра n и m
// Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
// m и n включительно
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

const numbersGenerator = (len, n, m) => {
  const numArr = [];
  if (n < m) {
    for (let i = n; i <= m; i++) {
      numArr.push(i);
    }
  } else {
    for (let i = n; i >= m; i--) {
      numArr.push(i);
    }
  }

  const arr = [];
  let i = 0;
  while (i < len) {
    arr.push(numArr[Math.floor(Math.random() * numArr.length)]);
    i++;
  }
  return arr;
};

console.log(numbersGenerator(25, -5, 300));
