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
  const max = (xy * x + yx * y) / (xy + yx);
  const min = x + y - max;
  return min;
};

console.log(minNum(first, second));

{
  let xy = Math.sign(x - y) + 1;
  let yx = Math.sign(y - x) + 1;
  const max = (xy * x + yx * y) / 2;
  const min = x + y - max;
}

{
  const abs = (x) => (x ** 2) ** 0.5;

  let maxAbs = (a + b + abs(a - b)) / 2;
  let minAbs = (a + b - abs(a - b)) / 2;
  console.log(minAbs);
}
