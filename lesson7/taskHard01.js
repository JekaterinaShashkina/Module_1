"use strict";
// Напишите функцию getAveragePriceGoods
// для получения средней цены товара
// Дан многомерный  массив
// В каждом массиве из двух элементов, первым является количество товаров в чеке, а вторым — общая сумма.
// Необходимо посчитать среднюю стоимость одного товара в магазине.

const allСashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];

const getAveragePriceGoods = (arr) => {
  let allcount = 0;
  let allSum = 0;
  for (const elems of arr) {
    allcount += elems[0];
    allSum += elems[1];
    return allSum / allcount;
  }
};

console.log(getAveragePriceGoods(allСashbox));
