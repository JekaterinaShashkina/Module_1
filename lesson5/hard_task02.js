// Вторая задача
// В отдельном файле hard_task_02
// Получите от пользователя 2 числа
// Напишите функцию нахождения минимального числа, без использования условного оператора, циклов и массивов
// Не используйте Math.max и Math.min

const first = +prompt("Введите первое число ");
const second = +prompt("Введите второе число ");

const minNum = (x, y) => {
  const xy = (x - (x % y)) / y;
  const yx = (y - (y % x)) / x;
  return (xy * x + yx * y) / (xy + yx);
};

console.log(minNum(first, second));
