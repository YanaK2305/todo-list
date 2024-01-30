const todoInp = document.querySelector(".todo__inp");
const todoTime = document.querySelector(".todo__time");
const btnEdd = document.querySelector(".btnedd");
const todoBody = document.querySelector(".todo__body");
const btnClear = document.querySelector(".btnclear");
const todoCount = document.querySelector(".todo__count");
const template = document.querySelector(".temp");
const modal = document.querySelector(".modal__wrapper");
const modalClose = document.querySelector(".close");
const modalText = document.querySelector(".new__text");
const modalTime = document.querySelector(".new__time");
const modalSave = document.querySelector(".save");

btnEdd.onclick = addTodo;
btnClear.onclick = clearTodo;
modalClose.onclick = closeModal;

// навешиваем на кнопки онклик

function addTodo() {
  const text = todoInp.value;
  const time = todoTime.value;
  // задаем переменные в которых получаем данные из полей ввода
  if (text != "") {
    // если поле ввода не равно пустой строке, то выполняем следующее
    const clone = template.content.cloneNode(true);
    // создаем шаблон
    const textHtml = clone.querySelector(".text");
    const timeHtml = clone.querySelector(".time");
    const deleteBtn = clone.querySelector(".delete");
    const todoItem = clone.querySelector(".todo__item");
    const checkBox = clone.querySelector(".checkbox");
    const editBtn = clone.querySelector(".edit");
    // достаем нужные классы из html

    deleteBtn.onclick = () => deleteTodo(todoItem);
    // прописываем стрелочную функцю, которая по клику удаляет введенное дело
    checkBox.onchange = () => completeTodo(todoItem);
    // прописваем стрелочную функцию, которая меняет цвет для выбранного дела, onchange для элемнтов формы
    editBtn.onclick = () => editTodo(todoItem, text, time);
    // прописываем стрелочную функцию, которая при клике

    textHtml.innerHTML = text;
    timeHtml.innerHTML = time;
    // достаем содержимое html элементов
    todoBody.append(clone);
    // вставляем текст(шаблон) в конец элемента

    todoInp.value = "";
    todoTime.value = "";
    // очищаем поля ввода
    todoCount.innerHTML = Number(todoCount.innerHTML) + 1;
    // изменяет содержимое элемента на число и прибавляет шаг
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
function deleteTodo(todo) {
  if (confirm("вы уверенны?")) {
    todo.remove();

    todoCount.innerHTML = Number(todoCount.innerHTML) - 1;
  }
}
function completeTodo(todo) {
  todo.classList.toggle("complete");
}
// toggle добавляет класс если у элемента его нет или удаляет если был

function editTodo(todo, text, time) {
  modal.classList.remove("hidden");
  modalText.value = text;
  modalTime.value = time;
  modalSave.onclick = () => saveTodo(todo);
}
// функция в которой модальное окно становится видимым, содержимое text,time передается из todo, навешивается онклик на кнопку сохранить

function saveTodo(todo) {
  const todoText = todo.querySelector(".text");
  const todoTime = todo.querySelector(".time");
  todoText.innerHTML = modalText.value;
  todoTime.innerHTML = modalTime.value;
  closeModal();
}
// функция коктрря позволяет менять содержимое time,text в todo при сохранении

function closeModal() {
  modal.classList.add("hidden");
}
// функция которя позволяет очистить содержимое списка дел

// создание тегов html и добавление на страницу
// let btn = document.querySelector(".btn");
// let container = document.querySelector(".container");

// btn.onclick = addHtml;
// function addHtml() {
//   const div = document.createElement("div");
//   const p = document.createElement("p");
//   p.innerHTML = "хорошая погода";
//   div.innerHTML = "привет";
//   div.classList.add("block");
//   div.append(p);
//   container.append(div);
//   // node.append – добавляет html элемент в конец node,
//   // node.prepend - добавляет html элемент  в начало node
//   // node.before –- вставляет html элемент до node,
//   // node.after–- вставляет html элемент после node,
//   console.log(div);
// }
