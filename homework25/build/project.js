"use strict";
var showForm = function () {
  var e = createElem("form", { className: "form" }, null, null, userBlockElem),
    a = createElem(
      "input",
      { placeholder: "Name", type: "text", className: "name-user" },
      null,
      null,
      e
    ),
    r =
      (createElem(
        "input",
        { placeholder: "Password", type: "password", className: "password" },
        null,
        null,
        e
      ),
      createElem(
        "input",
        { placeholder: "Age", type: "number", className: "age-user" },
        null,
        null,
        e
      )),
    t = createElem(
      "input",
      { placeholder: "Email", type: "text", className: "email" },
      null,
      null,
      e
    ),
    u = createElem(
      "input",
      { placeholder: "Phone", className: "phone-user" },
      null,
      null,
      e
    ),
    n = createElem(
      "input",
      { placeholder: "Card", className: "number-user" },
      null,
      null,
      e
    );
  createElem(
    "input",
    { type: "submit" },
    {
      click: function (e) {
        var l = [];
        a.value.match(/^[A-Z|А-Я a-z|а-я]{2,20}$/)
          ? ((a.style.backgroundColor = "green"),
            l.push("Name: ".concat(a.value)))
          : (e.preventDefault(), (a.style.backgroundColor = "red")),
          t.value.match(/\w+@\w+.(com|ua|net)/)
            ? ((t.style.backgroundColor = "green"),
              l.push("Enail: ".concat(t.value)))
            : (e.preventDefault(), (t.style.backgroundColor = "red")),
          u.value.match(/^\+380\d{9}$/)
            ? ((u.style.backgroundColor = "green"),
              l.push("Mobile Phone: ".concat(u.value)))
            : (e.preventDefault(), (u.style.backgroundColor = "red")),
          n.value.match(/^\d{16}$/)
            ? ((n.style.backgroundColor = "green"),
              l.push("Card: ".concat(n.value)))
            : (e.preventDefault(), (n.style.backgroundColor = "red")),
          18 <= r.value
            ? ((r.style.backgroundColor = "green"),
              l.push("Age: ".concat(r.value)))
            : (e.preventDefault(), (r.style.backgroundColor = "red")),
          5 === l.length && localStorage.setItem(a.value, JSON.stringify(l));
      },
    },
    "Save",
    e
  );
};
("use strict");
var addUserElem = document.querySelector(".btn-add-user"),
  infoUserElem = document.querySelector(".info-user"),
  userBlockElem = document.querySelector(".add-user-block"),
  listUsersElem = document.querySelector(".list-users"),
  createElem = function (e, t, r, s, n) {
    var u = document.createElement(e);
    if (t)
      for (var c in t)
        "className" === c
          ? u.setAttribute("class", t[c])
          : u.setAttribute(c, t[c]);
    if (r) for (var l in r) u.addEventListener(l, r[l]);
    return (u.textContent = s || ""), n.appendChild(u), u;
  };
("use strict");
addUserElem.addEventListener(
  "click",
  function () {
    (infoUserElem.style.display = "none"), showForm();
  },
  { once: !0 }
);
var key,
  _loop = function () {
    var n, e;
    Object.hasOwnProperty.call(localStorage, key) &&
      ((n = createElem(
        "li",
        { className: "user", id: key },
        null,
        key,
        listUsersElem
      )),
      (e = createElem("div", { className: "btn-control" }, null, null, n)),
      createElem(
        "button",
        null,
        {
          click: function () {
            var e = n.getAttribute("id"),
              l = JSON.parse(localStorage.getItem(e)),
              t =
                ((infoUserElem.innerHTML = "<h2>Details user ".concat(
                  e,
                  " :  <h2>"
                )),
                createElem(
                  "ul",
                  { className: "details-user" },
                  null,
                  null,
                  infoUserElem
                ));
            l.forEach(function (e) {
              createElem("li", null, null, e, t);
            }),
              createElem(
                "button",
                { className: "back-btn" },
                {
                  click: function () {
                    document.location.reload();
                  },
                },
                "Повернутися до списку користувачів",
                infoUserElem
              );
          },
        },
        "View",
        e
      ),
      createElem(
        "button",
        null,
        {
          click: function () {
            addUserElem.style.display = "none";
            var e = n.getAttribute("id");
            (infoUserElem.style.display = "none"), showForm(e);
          },
        },
        "Edit",
        e
      ),
      createElem(
        "button",
        null,
        {
          click: function () {
            var e = n.getAttribute("id");
            !0 === confirm("Видалити користувача ".concat(e, "?")) &&
              (localStorage.removeItem(e), document.location.reload());
          },
        },
        "Remove",
        e
      ));
  };
for (key in localStorage) _loop();
