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

const showComment = (valueElem) => {
  fetch(`https://jsonplaceholder.typicode.com/comments/${valueElem}`)
    .then((response) => response.json())
    .then(
      (json) =>
        createElem("p", null, null, `Name: ${json.name}`, blockComment) &&
        createElem("p", null, null, `Email: ${json.email}`, blockComment) &&
        createElem("p", null, null, `Comment: ${json.body}`, blockComment)
    );
};

const showPost = (valueElem) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${valueElem}`)
    .then((response) => response.json())
    .then(
      (json) =>
        createElem(
          "h2",
          { className: "h2-title" },
          null,
          `Title: ${json.title}`,
          blockInfoElem
        ) &&
        createElem(
          "p",
          { className: "info-post" },
          null,
          json.body,
          blockInfoElem
        ) &&
        createElem(
          "button",
          { className: "show-comment-btn" },
          {
            click: (e) => {
              e.preventDefault();
              blockComment.innerHTML = "";
              showComment(valueElem);
            },
          },
          "Post comments",
          blockInfoElem
        )
    );
};
