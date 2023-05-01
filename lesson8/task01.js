"use strict";
// Первая задача:
// Напишите функцию генератор  массива случайных чисел в файле task01.js
// Функция принимает один обязательный параметр это количество элементов в массиве
// И возвращает массив со случайными числами от одного до 100 включительно;

const numbersGenerator = (len) => {
  const arr = [];
  let i = 0;
  while (i < len) {
    arr.push(Math.round(Math.random() * 100));
    i++;
  }
  return arr;
};

console.log(numbersGenerator(3));
