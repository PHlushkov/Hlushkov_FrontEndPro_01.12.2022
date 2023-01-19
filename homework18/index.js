"use strict";

const container = document.getElementsByClassName("container")[0];
const fieldLogin = document.getElementsByClassName("login")[0];

fieldLogin.onmouseover = showDiv;
fieldLogin.onmouseout = deleteDiv;

const btn = document.getElementsByClassName("btn")[0];
const btnLink = document.getElementsByClassName("btn-link")[0];
const followTheLink = document.getElementsByClassName("link")[0];

btn.onclick = onClick;

const imgRandom = document.getElementsByClassName("random-img")[0];

const arr = [
  "./img/png1.png",
  "./img/png2.png",
  "./img/png3.png",
  "./img/png4.png",
  "./img/png5.png",
  "./img/png6.png",
  "./img/png7.png",
  "./img/png8.png",
  "./img/png9.png",
];

imgRandom.src = arrayRandElement(arr);
