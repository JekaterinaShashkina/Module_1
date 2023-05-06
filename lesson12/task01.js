'use strict';
const game = () => {
  const number = Math.round(Math.random() * 100);
  console.log(number);
  const userNumber = prompt('Введите число от 1 до 100');

  const checkNumber = (n) => {
    if (n === null) {
      return alert('Конец игры');
    }
    if (+n === number) {
      return alert('Правильно!');
    } else {
      if (+n < number) {
        n = prompt('Больше! Введите другое число');
      } else if (n > number) {
        n = prompt('Меньше! Введите другое число');
      } else if (Number.isNaN(+n)) {
        n = prompt('Введи число!');
      }
      checkNumber(n);
    }
  };
  checkNumber(+userNumber);
};

game();
