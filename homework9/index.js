// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0.5 (20 20,5 21 21,5 ...)

// for (let i = 19.5; i <= 29.5; i += 0.5) {
//   document.write(`${i + 0.5}; `);
// }

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

// const convert = 27;

// for (let i = 10; i <= 100; i += 10) {
//   const result = i * convert;
//   document.write(`${result}; `);
// }

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

// const enterNumb = +prompt("Вкажіть число");

// for (let i = 1; i <= 100; i++) {
//   const result = i ** 2;
//   if (result < enterNumb) {
//     document.write(`${result}; `);
//   }
// }

// // Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

// const userNum = +prompt("Вказати число");

// for (let i = 2; i < userNum; i++) {
//   if (userNum % i == 0) {
//     alert("Число не являється простим");
//   } else {
//     alert("Число є простим");
//   }
//   break;
// }

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

// const enterNumb = +prompt("Вкажіть число");
// const num = 3;

// for (let i = 1; i < enterNumb; i++) {
//   if (num ** i === enterNumb) {
//     alert("Число можна одержати шляхом зведення числа 3 у ступінь");
//     break;
//   }
//   if (num ** i > enterNumb) {
//     alert("Число не можна одержати шляхом зведення 3 у ступінь");
//     break;
//   }
// }
