let todoInp = document.querySelector(".todo__inp");
let todoTime = document.querySelector(".todo__time");
let btnEdd = document.querySelector(".btnedd");
let todoBody = document.querySelector(".todo__body");
let btnClear = document.querySelector(".btnclear");
let todoCount = document.querySelector(".todo__count");

btnEdd.onclick = addTodo;
btnClear.onclick = clearTodo;

function addTodo() {
  let text = todoInp.value;
  let time = todoTime.value;
  if (text != "") {
    todoBody.insertAdjacentHTML(
      "beforeend",
      `<div class="todo__item">
    <div>
      <div class="text">${text}</div>
      <div class="time">${time}</div>
    </div>
    <div>
      <input class="checkbox" type="checkbox" />
    </div>
  </div>`
    );
    todoInp.value = "";
    todoTime.value = "";
    todoCount.innerHTML = Number(todoCount.innerHTML) + 1;
  } else {
    alert("Введите дело");
  }
}

function clearTodo() {
  if (confirm("вы уверенны?")) {
    todoBody.innerHTML = null;
    todoCount.innerHTML = 0;
  }
}
