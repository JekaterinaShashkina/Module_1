// Налоговая ставка 13% на доход до 15 000 ₽
// Налоговая ставка 20% на доход выше 15 000 ₽ означает,
// что 20% уплачивается не со всей суммы, а лишь с той части, которая превосходит 15 000 ₽, но не выше 50 000 ₽
// Налоговая ставка 30% на доход выше 50 000 ₽ означает,
// что 30% уплачивается не со всей суммы, а лишь с той части, которая превосходит 50 000 ₽.

{
  const salary = +prompt("Введите сумму своей зарплаты ");

  if (salary > 0 && salary < 15000) {
    console.log(salary * 0.13);
  }

  if (salary >= 15000 && salary < 50000) {
    console.log(15000 * 0.13 + (salary - 15000) * 0.2);
  }

  if (salary >= 50000) {
    console.log(15000 * 0.13 + 35000 * 0.2 + (salary - 50000) * 0.3);
  } else {
    console.log("Неправильно ввели сумму, попробуйте еще раз");
  }
}
