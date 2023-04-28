// Первая задача:
// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
// 1 евро = 1.2 доллара,
// 1 доллар = 64 рубля.

const eur = +prompt("Введите стоимость покупки в евро ");

const rublePrice = (eur) => {
  const dollars = eur * 1.2;
  const rubles = dollars * 64;
  return rubles;
};

console.log(`Ваша покупка в рублях ${rublePrice(eur)}`);
