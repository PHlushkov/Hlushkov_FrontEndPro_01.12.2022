const enterNumber = +prompt("Вкажи довжину массиву");

const arr = [];
console.log(arr);

for (let i = 0; i < enterNumber; i++) {
  arr.push(prompt(`Значення массиву ${i}`));
}
console.log(arr);

arr.sort();
console.log(arr);

arr.splice(1, 3);
console.log(arr);
