"use strict";
// Создайте файл game02.js
// Усовершенствуйте игру, которую написали в game01
// бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
// бот запоминает каждое число которое ввел пользователь и записывает в массив
// бот отграничивает количество попыток до 30% от количества цифр в диапазоне
// если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
// если диапазон от 50 до 100, то попыток бот даёт 15
// если попытки закончились игра прекращается

const numArr = [];
const userArr = [];

let first = +prompt("Введите первое число");
let second = +prompt("Введите второе число");
if (first > second) {
  let x = second;
  second = first;
  first = x;
}

for (let i = first; i <= second; i++) {
  numArr.push(i);
}
let att = 0;

if (first === 50 && second === 100) {
  att = 15;
} else {
  att = Math.round((second - first) * 0.3);
}
console.log(att);

const number = +numArr[Math.floor(Math.random() * numArr.length)];
console.log(number);

let userNumber = "";
console.log(userArr);

while (true) {
  if (userArr.length === att) {
    alert("Попытки кончились");
    break;
  } else {
    userNumber = prompt(`Введите число от ${first} до ${second}.`);
  }
  if (userNumber === null) {
    alert("Конец игры");
    break;
  }

  if (Number.isNaN(+userNumber)) {
    userNumber = prompt("Введи число!");
  }

  if (+userNumber === number) {
    alert("Правильно!");
    break;
  }
  if (userArr.includes(userNumber)) {
    alert("Это число вы уже вводили");
    console.log(userArr);
  } else if (+userNumber > number) {
    userArr.push(userNumber);
    if (userArr.length === att) {
      alert("Меньше! Введите другое число");
    }
  } else if (+userNumber < number) {
    userArr.push(userNumber);
    if (userArr.length !== att) {
      alert("Больше! Введите другое число");
    }
  }
}
console.log(userArr);
