//  Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const arr = [12, 43, "Pavlo", 24, 10, "Dnipro", "Hillel", 12];

const newArr = arr.filter((value) => typeof value === "number");
const sumArr = newArr.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);
console.log(sumArr);

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

const numberFirst = +prompt("Enter the first number");
const znak = prompt("Specify a mathematical operation");
const numberSecond = +prompt("Enter the second number");

const getSum = (numberFirst, numberSecond) => numberFirst + numberSecond;
const getDifference = (numberFirst, numberSecond) => numberFirst - numberSecond;
const getMultiplication = (numberFirst, numberSecond) =>
  numberFirst * numberSecond;
const getDivision = (numberFirst, numberSecond) => numberFirst / numberSecond;
const getPercent = (numberFirst, numberSecond) => numberFirst % numberSecond;
const getStage = (numberFirst, numberSecond) => numberFirst ^ numberSecond;

const showResult = (numberFirst, znak, numberSecond) => {
  switch (znak) {
    case "+":
      return getSum(numberFirst, numberSecond);
    case "-":
      return getDifference(numberFirst, numberSecond);
    case "*":
      return getMultiplication(numberFirst, numberSecond);
    case "/":
      return getDivision(numberFirst, numberSecond);
    case "%":
      return getPercent(numberFirst, numberSecond);
    case "^":
      return getStagex(numberFirst, numberSecond);
    default:
      return "";
  }
};

alert(showResult(numberFirst, znak, numberSecond));

// 3.Написати функцію заповнення даними користувача двомірного масиву.
//   Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

const lengthArr = +prompt("Enter lengts arr");

const mainArray = [];
let internalArray = [];

while (mainArray.length < lengthArr) {
  const lengthArrInternal = +prompt("Internal array length");

  while (internalArray.length < lengthArrInternal) {
    let enterArrElement = prompt("Enter elements");
    internalArray.push(enterArrElement);
  }
  mainArray.push(internalArray);
  internalArray = [];

  console.log(mainArray);
}

//4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
//  'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const enterString = prompt("Specify the word");

const exceptionsAmout = +prompt("Enter exceptions amout");

const deleteCharacter = [];

while (deleteCharacter.length < exceptionsAmout) {
  let exception = prompt("Enter exception");
  deleteCharacter.push(exception);
}

console.log(deleteCharacter);

const func = (enterString, deleteCharacter) => {
  deleteCharacter.forEach((element) => {
    enterString = enterString.split(element).join("");
  });
  alert(enterString);
};

func(enterString, deleteCharacter);
