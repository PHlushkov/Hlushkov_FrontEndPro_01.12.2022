"use strict";

const dateOrders = localStorage.getItem("date");
const categoriesElem = document.querySelector(".categories");

const ordersElem = document
  .querySelector(".orders")
  .addEventListener("click", () => {
    categoriesElem.innerHTML = "";
    const messageOrders = document.createElement("p");
    messageOrders.textContent = dateOrders;
    categoriesElem.appendChild(messageOrders);
  });
