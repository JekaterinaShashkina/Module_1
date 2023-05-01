"use strict";

// Третья задача:
// Скопируйте код task02.js в task03.js
// Добавьте 4-ый опциональный параметр у функции
//  4-ый опциональный параметр это строка:
// если функция получает 'even', то функция возвращает массив чётных чисел
// если функция получает 'odd', то функция возвращает массив нечётных чисел

const numbersGenerator = (len, n, m, evenOdd = "") => {
  const numArr = [];
  if (n > m) {
    let x = m;
    m = n;
    n = x;
  }
  if (evenOdd === "even") {
    for (let i = n; i <= m; i++) {
      if (i % 2 === 0) {
        numArr.push(i);
      }
    }
  } else if (evenOdd === "odd") {
    for (let i = n; i <= m; i++) {
      if (i % 2 === 1) {
        numArr.push(i);
      }
    }
  } else {
    for (let i = n; i <= m; i++) {
      numArr.push(i);
    }
  }

  console.log(numArr);

  const arr = [];
  let i = 0;
  while (i < len) {
    arr.push(numArr[Math.floor(Math.random() * numArr.length)]);
    i++;
  }
  return arr;
};

console.log(numbersGenerator(5, 5, 20, "even"));
