"use strict";
// Третья задача:
// Напишите функцию addPrefix
// Функция получает массив в виде параметров и возвращает массив с префиксами
// После префикса пробел добавляется автоматически
const names = [
  "Noah",
  "Liam",
  "Mason",
  "Jacob",
  "Robot",
  "William",
  "Ethan",
  "Michael",
  "Alexander",
];

const addPrefix = (arr, prefix) => {
  const changedNames = [];
  for (const i of arr) {
    changedNames.push(`${prefix} ${i}`);
  }
  return changedNames;
};

console.log(addPrefix(names, "Mrs"));
