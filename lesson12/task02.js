/** !Задача #2
Напишите рекурсивную функцию, которая принимает один параметр массив,
генерирует целое число от 0 до 10 включительно и добавляет его в массив.
Каждый раз после добавления нового числа проверяет сумму элементов массива,
если она меньше 50 запускается снова передавая себе массив.
//Если сумма больше 50-ти,
//то функция возвращает этот массив.*/
'use strict';

const newArr = (arr) => {
  const number = Math.round(Math.random() * 10);
  arr.push(number);
  if (arr.length < 5) {
    console.log(arr);
    newArr(arr);
  } else {
    return arr;
  }
  console.log(arr);
};

newArr([1, 2, 3]);
