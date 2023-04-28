// Третья задача:
// Напишите функцию, которая принимает строку и возвращает обратную строку
// Пример: "Привет мир" => "рим тевирП"

const strReverse = (str) => {
  return str.split("").reverse().join("");
};

console.log(strReverse("Hello world!"));
