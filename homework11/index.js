const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

console.log(arr);

// 1.  Знайти суму та кількість позитивних елементів.

let sum = 0;
let amount = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
    amount += [i].length;
  }
}

console.log(
  `Сума позитивних елементів складає ${sum}, кількість позитивних елементів = ${amount}`
);

//2. Знайти мінімальний елемент масиву та його порядковий номер
const minElement = Math.min(...arr);

for (i = 0; i < arr.length; i++) {
  if (arr[i] === minElement) {
    console.log(
      `Мінімальний елемент масиву = ${minElement}, його порядковий номер = ${i}`
    );
  }
}

// 3. Знайти максимальний елемент масиву та його порядковий номер.

const maxElement = Math.max(...arr);

for (i = 0; i < arr.length; i++) {
  if (arr[i] === maxElement) {
    console.log(
      `Максимальний елемент масиву = ${maxElement}, його порядковий номер = ${i}`
    );
  }
}

// 4. Визначити кількість негативних елементів.

let numberNegative = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    numberNegative++;
  }
}

console.log(`Кількість негативних елементів = ${numberNegative}`);

// 5. Знайти кількість непарних позитивних елементів.

let amountUnpaired = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 !== 0) {
    amountUnpaired++;
  }
}

console.log(`Кількість непарних позитивних елементів = ${amountUnpaired}`);

// 6. Знайти кількість парних позитивних елементів

let amountPair = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    amountPair += 1;
  }
}

console.log(`Кількість парних позитивних елементів = ${amountPair}`);

// 7. Знайти суму парних позитивних елементів

let sumPair = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 === 0) {
    sumPair += arr[i];
  }
}

console.log(`Сума парних позитивних елементів = ${sumPair}`);

// 8. Знайти суму непарних позитивних елементів.

let unpairedElements = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] % 2 !== 0) {
    unpairedElements += arr[i];
  }
}

console.log(`Сума непарних позитивних елементів = ${unpairedElements}`);

// 9. Знайти добуток позитивних елементів.

let multiplication = 1;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    multiplication *= arr[i];
  }
}

console.log(`Добуток позитивних елементів = ${multiplication}`);

// 10. Знайти найбільший серед елементів масиву, ост альні обнулити.

let newArr = arr.filter((item) => item === maxElement);

console.log(newArr); // Вирішив спробувати використати тут метод )
