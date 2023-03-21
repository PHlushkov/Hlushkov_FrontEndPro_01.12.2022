const addUserElem = document.querySelector(".btn-add-user");
const infoUserElem = document.querySelector(".info-user");
const userBlockElem = document.querySelector(".add-user-block");
const listUsersElem = document.querySelector(".list-users");

const createElem = (tagName, attributes, events, textContent, parentElem) => {
  const newElem = document.createElement(tagName);

  if (attributes) {
    for (const key in attributes) {
      if (key === "className") {
        newElem.setAttribute("class", attributes[key]);
      } else {
        newElem.setAttribute(key, attributes[key]);
      }
    }
  }

  if (events) {
    for (let Event in events) {
      newElem.addEventListener(Event, events[Event]);
    }
  }

  newElem.textContent = textContent || "";
  parentElem.appendChild(newElem);
  return newElem;
};
