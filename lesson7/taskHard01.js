"use strict";
// Напишите функцию getAveragePriceGoods
// для получения средней цены товара
// Дан многомерный  массив
// В каждом массиве из двух элементов, первым является количество товаров в чеке, а вторым — общая сумма.
// Необходимо посчитать среднюю стоимость одного товара в магазине.

{
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
    let aver = 0;

    for (const elems of arr) {
      aver += elems[1] / elems[0];
      return aver;
    }
  };

  console.log(getAveragePriceGoods(allСashbox));
}
