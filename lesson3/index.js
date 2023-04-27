"use strict";

{
  const product = "IPhone 12";

  const count = 10;

  const productCategory = "Mobile";

  const productPrice = 1200;

  console.log(product);

  console.log(count * productPrice);
}

{
  const product = "IPad";
  const count = 7;
  const productCategory = "Tablet";
  const productPrice = 800;
  console.log(product);

  console.log(count * productPrice);
}
{
  // Первая задача:

  const product = prompt("Введите наименование товара ");
  const count = prompt("Введите количество товара ");

  const productCategory = prompt("Введите категорию товара ");
  const productPrice = prompt("Введите ценв товара ");

  console.log(`count: ${typeof +count}`);
  console.log(`price: ${typeof +productPrice}`);

  console.log(
    `На складе ${+count} единицы товара ${product} на сумму ${
      +count * +productPrice
    }`
  );
}
