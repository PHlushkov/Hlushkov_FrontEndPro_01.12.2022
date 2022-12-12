const enterNumber = prompt("Укажи значение через ',' (Пример: 1, 2, 3, JS)");

const arr = enterNumber.split(",");
console.log(arr);

arr.sort();
console.log(arr);

arr.splice(2, 3);
console.log(arr);
