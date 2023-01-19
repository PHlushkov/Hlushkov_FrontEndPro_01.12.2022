const showDiv = () => {
  const creationDiv = document.createElement("div");
  creationDiv.className = "div-message";
  creationDiv.innerHTML = "<p>New Div</p>";

  container.appendChild(creationDiv);
};

const deleteDiv = () => {
  const notShowDiv = document.getElementsByClassName("div-message");

  for (let i = 0; i < notShowDiv.length; i++) {
    notShowDiv[i].remove();
  }
};

const onClick = () => {
  let link;
  link = prompt("Вкажи посилання");
  link.includes("https://") && link.includes("https://")
    ? (link = link)
    : (link = "https://" + link);
  followTheLink.href = link;
};

const arrayRandElement = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};
