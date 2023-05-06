// Задача #1
// Создать объект rectangle, который описывает ширину и высоту (свойства width и height) прямоугольника
// Объект должен иметь 2 сеттера для записи ширины и высоты и два геттера для получения периметра и площади прямоугольника
// Сеттеры могут принимать только числа
// Геттеры возвращают строку число + "см"
// пример "40см"
// По умолчанию значения высоты и ширины заданы 5 см

const height = 5;
const width = 5;

const rectangle = {
  height,
  width,
  set [height](v) {
    this.height = v;
  },
  set [width](v) {
    this.width = v;
  },
  get square() {
    const s = this.width * this.height;
    return `${s}cm`;
  },
  get perimetr() {
    const p = 2 * (this.width + this.height);
    return `${p}cm`;
  },
};
console.log(rectangle.height);
console.log(rectangle.width);

rectangle.height = 3;
rectangle.width = 2;
console.log(rectangle.height);
console.log(rectangle.width);
console.log(rectangle.square);
console.log(rectangle.perimetr);
