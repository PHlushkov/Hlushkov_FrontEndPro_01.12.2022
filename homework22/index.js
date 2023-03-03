"use strict";

addUserElem.addEventListener(
  "click",
  () => {
    infoUserElem.style.display = "none";
    showForm();
  },
  { once: true }
);

for (const key in localStorage) {
  if (Object.hasOwnProperty.call(localStorage, key)) {
    const userInfo = createElem(
      "li",
      { className: "user", id: key },
      null,
      key,
      listUsersElem
    );
    const blockElem = createElem(
      "div",
      { className: "btn-control" },
      null,
      null,
      userInfo
    );
    createElem(
      "button",
      null,
      {
        click: () => {
          const idUser = userInfo.getAttribute("id");
          const infoLocalStorage = JSON.parse(localStorage.getItem(idUser));
          infoUserElem.innerHTML = `<h2>Details user ${idUser} :  <h2>`;
          const detailsInfo = createElem(
            "ul",
            { className: "details-user" },
            null,
            null,
            infoUserElem
          );
          infoLocalStorage.forEach((element) => {
            createElem("li", null, null, element, detailsInfo);
          });
          createElem(
            "button",
            { className: "back-btn" },
            {
              click: () => {
                document.location.reload();
              },
            },
            "Повернутися до списку користувачів",
            infoUserElem
          );
        },
      },
      "View",
      blockElem
    );
    createElem(
      "button",
      null,
      {
        click: () => {
          addUserElem.style.display = "none";
          const idUser = userInfo.getAttribute("id");
          infoUserElem.style.display = "none";
          showForm(idUser);
        },
      },
      "Edit",
      blockElem
    );
    createElem(
      "button",
      null,
      {
        click: () => {
          const idUser = userInfo.getAttribute("id");
          const confirmation = confirm(`Видалити користувача ${idUser}?`);
          if (confirmation === true) {
            localStorage.removeItem(idUser);
            document.location.reload();
          }
        },
      },
      "Remove",
      blockElem
    );
  }
}
