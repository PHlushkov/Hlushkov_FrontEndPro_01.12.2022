"use strict";

class Hamburger {
  constructor(size) {
    this.size = size;
    this.stuffing = [];
    this.additives = [];
  }

  addStuffing(stuffing) {
    this.stuffing.push(stuffing);
  }

  addAdditives(additives) {
    this.additives.push(additives);
  }

  getCalcPrice() {
    let price = this.size.price;
    this.stuffing.forEach((elem) => {
      price += elem.price;
    });
    this.additives.forEach((elem) => {
      price += elem.price;
    });
    return price;
  }

  getCalcCalories() {
    let calories = this.size.calories;
    this.stuffing.forEach((elem) => {
      calories += elem.calories;
    });
    this.additives.forEach((elem) => {
      calories += elem.calories;
    });
    return calories;
  }
}
