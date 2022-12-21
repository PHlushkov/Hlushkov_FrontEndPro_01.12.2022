const products = [
  { name: "Apple", price: 20 },
  { name: "Cherry", price: 10 },
  { name: "Banana", price: 15 },
  { name: "Orange", price: 25 },
  { name: "Lemon", price: 17 },
  { name: "Pear", price: 30 },
];

const GRN_PER_DOLLAR = 41;
const DISCOUNT_START_FROM = 10000;
const DISCOUNT = 20;

showList();

showProduct();

if (typeof prodNum === "number") {
  const product = products[prodNum];

  console.log(product);

  showPrice();

  if (typeof prodCount === "number") {
    const totalProdPrice = prodCount * product.price;

    console.log(`Total price: $${totalProdPrice}`);

    sumSell(totalProdPrice, GRN_PER_DOLLAR, DISCOUNT_START_FROM);
  }
}
