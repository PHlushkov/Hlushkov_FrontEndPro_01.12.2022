function Person(pName, pAge) {
  this.name = pName;
  this.age = pAge;
  this.car = [];
  this.addCar = function (newCar) {
    this.car.push(newCar);
  };
}
