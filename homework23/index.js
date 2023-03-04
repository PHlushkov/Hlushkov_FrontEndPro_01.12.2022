"use strict";

const postNumberElem = document.querySelector(".post-number");
const searchBtnElem = document.querySelector(".search-btn");
const blockInfoElem = document.querySelector(".block-info");
const blockComment = document.querySelector(".block-comment");

searchBtnElem.addEventListener("click", (e) => {
  e.preventDefault();
  const valueElem = postNumberElem.value;
  if (valueElem <= 0 || valueElem >= 101) {
    postNumberElem.style.backgroundColor = "red";
    blockComment.innerHTML = "";
    blockInfoElem.innerHTML = "";
    createElem(
      "p",
      { className: "error-mesadge", style: "color: red;" },
      null,
      "Вкажи число від 1 до 100",
      blockInfoElem
    );
  } else {
    blockComment.innerHTML = "";
    blockInfoElem.innerHTML = "";
    postNumberElem.style.backgroundColor = "green";
    showPost(valueElem);
  }
});
