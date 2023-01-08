const gCar = new Car();

// const gPerson1 = new Person("Pasha", 22);

function getUserInfo() {
  let name;
  let age;

  while (!name) {
    name = prompt("Enter name");
  }

  while (!age || age < 18) {
    age = prompt("How old r u?");
  }

  const newUser = new Person(name, age);

  return newUser;
}

gPerson1 = getUserInfo();

gPerson2 = getUserInfo();

function addCars(person) {
  const carsAmount = prompt("Введите количество машин");

  for (let i = 0; i < carsAmount; i++) {
    addCarForUser(person);
  }
}

function addCarForUser(person) {
  const carName = prompt("введите название машины");
  const carModel = prompt("введите модель машины");
  const carRelease = +prompt("введите выпуск машины");

  const newCar = new Car(carName, carModel, carRelease);

  person.addCar(newCar);
}

const garage = new Garage(gPerson1);
const garage2 = new Garage(gPerson2);

addCars(gPerson1);
addCars(gPerson2);

console.log(garage);
console.log(garage2);
