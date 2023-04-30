"use strict";
// Первая задача:
// Напишите функцию filter()
// функция принимает в параметрах 2 массива
// Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.

const allStudents = [
  "Иванов",
  "Петров",
  "Сидоров",
  "Кузнецов",
  "Смирнов",
  "Попов",
  "Соколов",
];
const failedStudents = ["Сидоров", "Смирнов", "Попов"];
const success = [];

const filter = (arrAll, arrFail) => {
  for (const element of arrAll) {
    if (!arrFail.find((item) => item === element)) {
      success.push(element);
    }
  }
  return success;
};

console.log(filter(allStudents, failedStudents));
