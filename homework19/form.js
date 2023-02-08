"use strict";

const form = document.querySelector(".form");

const nameUserElem = () => {
  const userName = document.createElement("input");
  userName.name = "ПІБ: ";
  userName.type = "text";
  userName.placeholder = "ПІБ";
  userName.required = "Name";

  form.appendChild(userName);
};

const cityElem = () => {
  const citySelect = document.createElement("select");
  const cityDnipro = document.createElement("option");
  const cityKyiv = document.createElement("option");
  const cityKharkiv = document.createElement("option");
  const cityKherson = document.createElement("option");

  citySelect.name = "Місто в якому знаходитесь: ";

  cityDnipro.innerHTML = "Дніпро";
  cityKyiv.innerHTML = "Київ";
  cityKharkiv.innerHTML = "Харків";
  cityKherson.innerHTML = "Херсон";

  form.appendChild(citySelect);

  citySelect.appendChild(cityDnipro);
  citySelect.appendChild(cityKyiv);
  citySelect.appendChild(cityKharkiv);
  citySelect.appendChild(cityKherson);
};

const postElem = () => {
  const postInput = document.createElement("input");
  postInput.type = "number";
  postInput.placeholder = "Відділення Нової Пошти";
  postInput.name = "Відділеня № ";
  postInput.required = "№";

  form.appendChild(postInput);
};

const paymentElem = () => {
  const payCash = document.createElement("p");
  const payCard = document.createElement("p");
  const payCardBtn = document.createElement("input");
  const payCashBtn = document.createElement("input");

  payCard.innerHTML = "Оплата банківською картою";
  payCash.innerHTML = "Післяоплата";

  payCardBtn.type = "radio";
  payCashBtn.type = "radio";

  payCardBtn.name = "Тип оплати: ";
  payCashBtn.name = "Тип оплати: ";

  payCardBtn.required = "pay";

  payCardBtn.value = "Оплата картою";
  payCashBtn.value = "Післяоплата";

  payCash.appendChild(payCashBtn);
  payCard.appendChild(payCardBtn);

  form.appendChild(payCash);
  form.appendChild(payCard);
};

const amountElem = () => {
  const amountInput = document.createElement("input");

  amountInput.name = "Кількість товару: ";
  amountInput.type = "number";
  amountInput.placeholder = "Кількість товару";

  amountInput.required = "amount";

  form.appendChild(amountInput);
};

const commentElem = () => {
  const comment = document.createElement("textarea");
  comment.name = "Коментар до замовлення: ";
  comment.placeholder = "Коментар до замовлення ";

  form.appendChild(comment);
};

const btnElem = () => {
  const buttonElem = document.createElement("input");

  buttonElem.type = "submit";
  buttonElem.value = "Замовити";
  const formData = new FormData(form);

  form.appendChild(buttonElem);
};

const bodyElem = document.querySelector(".body");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  formData.forEach((name, value) => {
    const formDataElem = document.createElement("p");
    formDataElem.innerHTML = value + `<strong>${name}</strong>`;
    bodyElem.appendChild(formDataElem);
    form.style.display = "none";
  });
});

const formElem = (user, city, post, payment, amount, comment, btn) => {
  user = nameUserElem();
  city = cityElem();
  post = postElem();
  payment = paymentElem();
  amount = amountElem();
  comment = commentElem();
  btn = btnElem();
};
