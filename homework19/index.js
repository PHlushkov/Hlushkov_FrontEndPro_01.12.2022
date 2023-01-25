"use strict";

const showCategories = () => {
  const categoriesElem = document.querySelector(".categories");

  DATA.forEach((item, id) => {
    const categoryElem = document.createElement("div");

    categoryElem.setAttribute("data-category-id", id);
    categoryElem.textContent = item.name;
    categoryElem.onclick = showProducrs;

    categoriesElem.appendChild(categoryElem);
  });
};

const showProducrs = (Event) => {
  const categoryId = Event.target.getAttribute("data-category-id");
  const products = DATA[categoryId].products;
  const productsElem = document.querySelector(".product");

  productsElem.innerHTML = "";

  products.forEach((item, id) => {
    const productElem = document.createElement("div");

    productElem.textContent = item.name;
    productElem.onclick = showDetails;

    productElem.setAttribute("data-category-id", categoryId);
    productElem.setAttribute("data-product-id", id);

    productsElem.appendChild(productElem);
  });
};

const showDetails = (Event) => {
  const categoryId = Event.target.getAttribute("data-category-id");
  const productId = Event.target.getAttribute("data-product-id");
  const details = DATA[categoryId].products[productId].description;
  const price = DATA[categoryId].products[productId].price;
  const detailsElem = document.querySelector(".details");
  const priceElem = document.querySelector(".details");
  const btnElem = document.querySelector(".details");

  detailsElem.innerHTML = "";
  priceElem.innerHTML = "";
  btnElem.innerHTML = "";

  const detailElem = document.createElement("div");
  const priceElement = document.createElement("div");
  const btnElement = document.createElement("button");

  detailElem.textContent = details;
  priceElement.textContent = price;
  btnElement.textContent = "Купити";

  detailElem.setAttribute("data-category-id", categoryId);
  detailElem.setAttribute("data-product-id", productId);

  detailsElem.appendChild(detailElem);
  priceElem.appendChild(priceElement);
  btnElem.appendChild(btnElement);

  btnElement.onclick = () => {
    const prt = alert("Товар Куплено");
    document.location.reload();
  };
};

showCategories();
