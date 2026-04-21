const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-todo-button");
const list = document.getElementById("todo-list");

function addTask() {
  if (!input || !list) return;

  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  li.onclick = function () {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
    } else {
      li.style.textDecoration = "line-through";
    }
  };

  list.appendChild(li);
  input.value = "";
  input.focus();
}

if (addButton) {
  addButton.onclick = addTask;
}

if (input) {
  input.onkeydown = function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  };
}

const welcomeEl = document.getElementById("welcome-text");
const beginnerEl = document.getElementById("beginner-text");

if (welcomeEl && beginnerEl) {
  const text1 = "Welcome to my vanilla cake baking guide! This website will teach you how to bake a simple and delicious vanilla cake from scratch. You will learn what ingredients you need, what tools to use, and the exact steps to follow.";
  const text2 = "This website is designed for beginners, so you do not need any baking experience. Just follow the instructions and have fun!";

  let i = 0;
  let j = 0;

  function typeFirst() {
    if (i < text1.length) {
      welcomeEl.textContent += text1[i];
      i++;
      setTimeout(typeFirst, 40);
    } else {
      typeSecond();
    }
  }

  function typeSecond() {
    if (j < text2.length) {
      beginnerEl.textContent += text2[j];
      j++;
      setTimeout(typeSecond, 40);
    }
  }

  typeFirst();
}

const bakerLink = document.getElementById("favorite-baker-link");

if (bakerLink) {
  bakerLink.onclick = function (event) {
    event.preventDefault();
    window.location.href = "https://sallysbakingaddiction.com/";
  };
}
