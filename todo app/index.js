// const listContainer = document.querySelector(".containerlist");
const newTodo = document.querySelector(".input-header");
const addTodo = document.querySelector(".todolist");
const heading = document.querySelector(".sub-heading");
const themeChange = document.querySelector(".theme");
const themeChangeTwo = document.querySelector(".theme2");
let numberItems = document.querySelector(".listnumber");
const allItems = document.querySelector(".allitems");
const activeItems = document.querySelector(".activeitems");
const clearItems = document.querySelector(".clear");
const completedTask = document.querySelector(".completedtask");
const body = document.getElementsByTagName("body")[0];
const html = document.getElementsByTagName("html")[0];

numberItems.innerText = 0;
function changeTheme() {
  themeChange.classList.add("hidden");
  themeChangeTwo.classList.remove("hidden");
  body.style.backgroundImage = "url(images/bg-desktop-dark.jpg)";
  addTodo.style.backgroundColor = "hsl(235, 24%, 19%)";
  addTodo.style.color = "white";
  heading.style.backgroundColor = "hsl(235, 24%, 19%)";
  newTodo.style.color = "white";
  html.style.backgroundColor = "hsl(235, 21%, 11%)";
}
function changeThemeTwo() {
  themeChange.classList.remove("hidden");
  themeChangeTwo.classList.add("hidden");
  addTodo.style.backgroundColor = "white";
  addTodo.style.color = "hsl(235, 19%, 35%)";
  heading.style.backgroundColor = "white";
  newTodo.style.color = "hsl(235, 19%, 35%)";
  body.style.backgroundImage = "url(images/bg-desktop-light.jpg)";
  html.style.backgroundColor = "hsl(236, 33%, 92%)";
}
function updateItemList(number) {
  numberItems.innerText = parseInt(numberItems.innerText) + number;
}

function todoList() {
  if (newTodo.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.className = "list-group"
    li.innerHTML = newTodo.value;
    listContainer = document.querySelector(".containerlist");
    listContainer.appendChild(li);
    listGroup = document.querySelectorAll(".containerlist .list-group");
    let span = document.createElement("span");
    span.innerHTML = "";
    li.appendChild(span);
  }
  newTodo.value = "";
  updateItemList(1);
}
newTodo.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    todoList();
  }
})
let listContainer = document.querySelector(".containerlist");

listGroup = document.querySelectorAll(".containerlist .list-group");
listContainer.addEventListener('click', (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    updateItemList(-1);
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
      updateItemList(0);
  } 
})
function allItem() {
  listGroup.forEach((item) => {
      item.classList.remove("hidden");
  });
  allItems.classList.add("activelink");
  activeItems.classList.remove("activelink");
  completedTask.classList.remove("activelink");
  clearItems.classList.remove("activelink");
}
function activeItem() {
  listGroup.forEach((item) => {
    if (item.classList.contains("checked")) {
      item.classList.add("hidden");
    } else {
      item.classList.remove("hidden");
    }
  });
  activeItems.classList.add("activelink");
  allItems.classList.remove("activelink");
  clearItems.classList.remove("activelink");
  completedTask.classList.remove("activelink");
}

function completedTasks() {
  activeItems.classList.remove("activelink");
  allItems.classList.remove("activelink");
  clearItems.classList.remove("activelink");
  completedTask.classList.add("activelink");
  listGroup.forEach((item) => {
    if (item.classList.contains("checked")) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}
function clearItem(){
  activeItems.classList.remove("activelink");
  allItems.classList.remove("activelink");
  clearItems.classList.add("activelink");
  completedTask.classList.remove("activelink");
  listGroup.forEach((item) => {
    if (item.classList.contains("checked")) {
      item.remove();
    }
  });
  // while(listContainer.firstChild) {
  //   listContainer.removeChild(listContainer.firstChild);
  // }
}
