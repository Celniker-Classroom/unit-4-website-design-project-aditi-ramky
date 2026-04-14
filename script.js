const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-todo-button");
const list = document.getElementById("todo-list");

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", () => {
    li.style.textDecoration =
      li.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  list.appendChild(li);
  input.value = "";
  input.focus();
}

addButton.addEventListener("click", addTask);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addTask();
});