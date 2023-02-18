"use strict";

const categoriesElem = document.querySelector(".categories");
const priceElem = document.querySelector(".details");

const ordersElem = document
  .querySelector(".btn")
  .addEventListener("click", () => {
    if (listOrders.length === 0) {
      alert("Замвлень немає");
      document.location.reload();
    }
    categoriesElem.innerHTML = "";
    priceElem.style.display = "none";
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Видалити всі замовлення";
    btnDelete.onclick = deleteOrders;

    listOrders.forEach((value, index) => {
      const messageOrders = document.createElement("li");

      messageOrders.textContent = value.date;

      messageOrders.setAttribute("orders-id", index);
      btnDelete.setAttribute("btn-id", index);

      messageOrders.onclick = showDetailsOrders;

      categoriesElem.appendChild(messageOrders);
      categoriesElem.appendChild(btnDelete);
    });
  });

const productsElem = document.querySelector(".product");

const showDetailsOrders = ({ target }) => {
  const ordersId = target.getAttribute("orders-id");
  const infoOrders = listOrders[ordersId].info;
  const infoOrder = document.createElement("p");

  productsElem.innerHTML = "";

  infoOrder.innerHTML = infoOrders;
  productsElem.appendChild(infoOrder);
};

const deleteOrders = () => {
  localStorage.removeItem("date");
  document.location.reload();
};
