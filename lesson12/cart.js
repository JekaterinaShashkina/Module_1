'use strict';
// Задача #2
// Продолжим работу в cart.js из предыдущего урока
// Методы объекта cart не должны обращаться к объекту по имени
// В объект cart добавьте сеттер setDiscount и свойство discount
// Сеттер setDiscount будет принимать promocode
// если promocode будет строка METHED, то в discount будет
// добавляться значение 15
// если promocode будет строка NEWYEAR, то в discount будет
// добавляться значение 21

const discount = 1;
const cart = {
  items: [],
  count: 0,
  discount,
  increaseCount(n) {
    return this.count + n;
  },
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 0.85;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 0.79;
    }
  },

  calculateItemPrice() {
    const totalPrice = this.items.reduce(
      (currentTotal, item) =>
        currentTotal + item.price * item.amount * this.discount,
      0,
    );
    return totalPrice;
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(product, price, amount = 1) {
    const items = this.items.push({
      product,
      price,
      amount,
    });
    this.count = this.increaseCount(amount);
    return items;
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
};

cart.setDiscount = 'METHED';
cart.add('Phone', 1000, 3);
cart.add('IPhone', 1500, 1);
cart.add('Tablet', 500, 4);

cart.print();
