function showList() {
  for (let prodId = 0; prodId < products.length; prodId++) {
    console.log(
      `${prodId + 1} ${products[prodId].name} ${products[prodId].price}`
    );
  }
}

let prodNum;

let showProduct = function () {
  do {
    prodNum = prompt("Write product number:");

    if (prodNum === null) {
      break;
    }
    prodNum--;
  } while (prodNum < 0 || prodNum > products.length - 1 || isNaN(prodNum));
};

let prodCount;

let showPrice = function () {
  do {
    prodCount = prompt("Write product count:");

    if (prodCount === null) {
      break;
    }
    prodCount = +prodCount;
  } while (prodCount <= 0 || isNaN(prodCount));
};

let showSell = function () {
  if (totalProdPrice * GRN_PER_DOLLAR > DISCOUNT_START_FROM) {
    console.log(`Congrats, you get a discount ${DISCOUNT}%`);
    console.log(
      `Your total price is: ${(totalProdPrice * (100 - DISCOUNT)) / 100}`
    );
  }
};
