"use strict";

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  increaseCount(n) {
    return this.count + n;
  },
  calculateItemPrice() {
    this.totalPrice = this.items.reduce((currentTotal, item) => {
      return currentTotal + item.price * item.amount;
    }, this.totalPrice);
  },
  add(product, price, amount = 1) {
    const items = this.items.push({
      product: product,
      price: price,
      amount: amount,
    });
    this.count = this.increaseCount(amount);
    this.totalPrice = this.getTotalPrice();
    return items;
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    this.calculateItemPrice();
    console.log(this.totalPrice);
  },
};

cart.add("Phone", 1000, 3);
cart.add("IPhone", 1500, 1);
cart.add("Tablet", 500, 4);

cart.print();
cart.clear();
cart.print();
