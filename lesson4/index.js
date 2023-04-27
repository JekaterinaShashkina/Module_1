{
  // Первая задача:

  const product = prompt("Введите наименование товара ");
  const count = Number(prompt("Введите количество товара "));

  const productCategory = prompt("Введите категорию товара ");
  const productPrice = prompt("Введите цену товара ");

  if (count) {
    console.log(
      `На складе ${count} единицы товара ${product} на сумму ${
        count * productPrice
      }`
    );
  } else {
    console.log("Вы ввели некорректные данные");
  }
}
