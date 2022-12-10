// 1. Дано два різних числа. Виявити яке з них більше, а яке менше.

// const numberFirst = +prompt("Enter number first");
// const numberSecond = +prompt("Enter number second");

// if (numberFirst > numberSecond) {
//   alert(`${numberFirst} більше ніж ${numberSecond}`);
// } else if (numberSecond > numberFirst) {
//   alert(`${numberSecond} більше ніж ${numberFirst}`);
// } else {
//   alert(`Числа ${numberFirst} та ${numberSecond} однакові`);
// }

// 2. Відомо дві дистанції. Одне в кілометрах, інше в футах(1 фут - 0,305м). Яка дистанція менша?

// const distanceKilometers = +prompt("Distance in kilometers");
// const distanceFeet = +prompt("Distance in feet");
// const kilometersEnvelope = distanceKilometers * 1000;
// const envelopeFeet = distanceFeet / 3.281;

// if (kilometersEnvelope < envelopeFeet) {
//   alert(`${distanceKilometers} кілометр менша ніж ${distanceFeet} фут`);
// } else if (envelopeFeet < kilometersEnvelope) {
//   alert(`${distanceFeet} фут менша ніж ${distanceKilometers} кілометр`);
// } else {
//   alert("Дистанції однакові");
// }

// 3. Виявити чи деяке число а є дільником числа b ? І навпаки. (Дати 2 відповіді)

// const firstNum = +prompt("Вказати переше число");
// const secondNum = +prompt("Вказати друге число");

// if (firstNum % secondNum === 0) {
//   alert(`${secondNum} є дільником ${firstNum}`);
// } else if (secondNum % firstNum === 0) {
//   alert(`${firstNum} є дільником ${secondNum}`);
// } else {
//   alert(`Жодне з чисел не є дільником`);
// }

// 4. Вивести на сторінку в одну строку через зап’яту числа від 10 до 20

for (let i = 10; i <= 20; i++) {
  let sign = ",";
  if (i === 20) sign = ";";
  document.write(i + sign);
}

// 5. Вивести квадрати чисел від 10 до 20

// for (let i = 10; i <= 20; i++) {
//     document.write(`${i ** 2}; `)
// }

// 6. Вивести таблицю множення на 7

// for (let i = 1; i <= 10; i++) {
//     document.write(`7 * ${i} = ${7 * i} <br>`);
// }

// 7. Знайти середнє арифметичне всіх цілих чисел від 1 до 500

// let result = 0;

// for (let i = 1; i <= 500; i++) {
//     result += i;
// }
// result = result / 500;

// document.write(result)

// 8.Знайти добуток усіх цілих чисел від 15 до 35

// let result = 1;

// for (i = 15; i <= 35; i++) {
//     result *= i;
// }

// document.write(`${result}; `)

// 9. Вивести суму тільки парних чисел в діапазоні від 30 до 80

// let result = 0;

// for (let i = 30; i <= 80; i++) {
//     if (i % 2 === 0) {
//         result += i
//     }
// }

// document.write(result)

// Вивести всі числа в діапазоні від 100 до 200 кратні 3

// for (let i = 100; i <= 200; i++) {
//     if (i % 3 === 0) {
//         document.write(`${i}; `)
//     }
// }
