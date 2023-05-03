"use strict";

const cart = {
  items: [],
  count: 0,
  increaseCount(n) {
    return this.count + n;
  },

  calculateItemPrice() {
    const totalPrice = this.items.reduce((currentTotal, item) => {
      return currentTotal + item.price * item.amount;
    }, 0);
    return totalPrice;
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(product, price, amount = 1) {
    const items = this.items.push({
      product: product,
      price: price,
      amount: amount,
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

cart.add("Phone", 1000, 3);
cart.add("IPhone", 1500, 1);
cart.add("Tablet", 500, 4);

cart.print();
