// Первая задача
// В отдельном файле hard_task_01
// Напишите функцию, вычисляющую наибольший общий делитель двух чисел

const nod = (x, y) => {
  while (x != 0 && y != 0) {
    if (x > y) {
      x = x % y;
    } else {
      y = y % x;
    }
  }
  return x + y;
};

console.log(nod(10, 99));