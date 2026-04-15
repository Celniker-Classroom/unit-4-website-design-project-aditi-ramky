const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-todo-button");
const list = document.getElementById("todo-list");

function addTask() {
  // Only run if these elements exist (baking-steps page)
  if (!input || !list) return;

  const text = input.value.trim();
  if (!text) return; // don't add empty tasks

  const li = document.createElement("li");
  li.textContent = text;

  // Click to cross out / uncross
  li.addEventListener("click", () => {
    li.style.textDecoration =
      li.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  list.appendChild(li);
  input.value = "";
  input.focus();
}

// Hook up events only if elements exist (so other pages don't break)
if (addButton) {
  addButton.addEventListener("click", addTask);
}

if (input) {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addTask();
  });
}

// ==============================
// Typewriter Effect (homepage)
// ==============================

const welcomeEl = document.getElementById("welcome-text");
const beginnerEl = document.getElementById("beginner-text");

// Only run this on the homepage (where these elements exist)
if (welcomeEl && beginnerEl) {
  const text1 =
    "Welcome to my vanilla cake baking guide! This website will teach you how to bake a simple and delicious vanilla cake from scratch. You will learn what ingredients you need, what tools to use, and the exact steps to follow.";

  const text2 =
    "This website is designed for beginners, so you do not need any baking experience. Just follow the instructions and have fun!";

  let i = 0;
  let j = 0;

  function typeFirst() {
    if (i < text1.length) {
      welcomeEl.textContent += text1[i];
      i++;
      setTimeout(typeFirst, 40); // speed in ms
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

  // Start typing the first paragraph
  typeFirst();
}