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

const showForm = () => {
  const formElem = createElem(
    "form",
    { className: "form" },
    null,
    null,
    userBlockElem
  );

  const userName = createElem(
    "input",
    {
      placeholder: "Name",
      type: "text",
      className: "name-user",
    },
    null,
    null,
    formElem
  );

  const password = createElem(
    "input",
    {
      placeholder: "Password",
      type: "password",
      className: "password",
    },
    null,
    null,
    formElem
  );

  const ageUser = createElem(
    "input",
    { placeholder: "Age", type: "number", className: "age-user" },
    null,
    null,
    formElem
  );

  const emailUser = createElem(
    "input",
    { placeholder: "Email", type: "text", className: "email" },
    null,
    null,
    formElem
  );

  const phoneUser = createElem(
    "input",
    { placeholder: "Phone", className: "phone-user" },
    null,
    null,
    formElem
  );

  const cardUser = createElem(
    "input",
    { placeholder: "Card", className: "number-user" },
    null,
    null,
    formElem
  );

  createElem(
    "input",
    { type: "submit" },
    {
      click: (e) => {
        const arr = [];
        if (userName.value.match(/^[A-Z|А-Я a-z|а-я]{2,20}$/)) {
          userName.style.backgroundColor = "green";
          arr.push(`Name: ${userName.value}`);
        } else {
          e.preventDefault();
          userName.style.backgroundColor = "red";
        }

        if (emailUser.value.match(/\w+@\w+.(com|ua|net)/)) {
          emailUser.style.backgroundColor = "green";
          arr.push(`Enail: ${emailUser.value}`);
        } else {
          e.preventDefault();
          emailUser.style.backgroundColor = "red";
        }

        if (phoneUser.value.match(/^\+380\d{9}$/)) {
          phoneUser.style.backgroundColor = "green";
          arr.push(`Mobile Phone: ${phoneUser.value}`);
        } else {
          e.preventDefault();
          phoneUser.style.backgroundColor = "red";
        }

        if (cardUser.value.match(/^\d{16}$/)) {
          cardUser.style.backgroundColor = "green";
          arr.push(`Card: ${cardUser.value}`);
        } else {
          e.preventDefault();
          cardUser.style.backgroundColor = "red";
        }

        if (ageUser.value >= 18) {
          ageUser.style.backgroundColor = "green";
          arr.push(`Age: ${ageUser.value}`);
        } else {
          e.preventDefault();
          ageUser.style.backgroundColor = "red";
        }

        if (arr.length === 5) {
          localStorage.setItem(userName.value, JSON.stringify(arr));
        }
      },
    },
    "Save",
    formElem
  );
};
