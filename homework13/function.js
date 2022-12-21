function showList() {
  for (let prodId = 0; prodId < products.length; prodId++) {
    console.log(
      `${prodId + 1} ${products[prodId].name} ${products[prodId].price}`
    );
  }
}

let prodNum;

const showProduct = function () {
  do {
    prodNum = prompt("Write product number:");

    if (prodNum === null) {
      break;
    }
    prodNum--;
  } while (prodNum < 0 || prodNum > products.length - 1 || isNaN(prodNum));
};

let prodCount;

const showPrice = function () {
  do {
    prodCount = prompt("Write product count:");

    if (prodCount === null) {
      break;
    }
    prodCount = +prodCount;
  } while (prodCount <= 0 || isNaN(prodCount));
};

function sumSell(a, b, c) {
  if (a * b > c) {
    console.log(`Congrats, you get a discount ${DISCOUNT}%`);
    console.log(`Your total price is: ${(a * (100 - DISCOUNT)) / 100}`);
  }
}
