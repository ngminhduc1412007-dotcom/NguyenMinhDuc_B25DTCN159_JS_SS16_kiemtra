let data = [
  {
    name: "Lam bai",
  },
  {
    name: "chuan bi bai",
  },
  {
    name: "code",
  },
];
let autoId = 1;

let inputValue = document.getElementById("taskInput");
let toDoList = document.getElementById("taskList");
let addBtn = document.getElementById("btn");
addBtn.addEventListener("click", addTask);

function addTask() {
  let taskValue = inputValue.value;
  if (taskValue.trim() === "") {
    alert("Vui long nhap ten cong viec!");
  }
  let newTask = {
    id: autoId,
    name: taskValue,
  };
  autoId++;
  data.push(newTask);
  inputValue.value = "";
  inputValue.focus();
  console.log("danh sach cong viec", data);

  renderTask();
}

function renderTask() {
  toDoList.innerHTML = "";
  if (data.length === 0) {
    toDoList.innerHTML = `
        <div class = "check"><p>Chua co cong viec</p></div>`;
  } else {
    data.forEach(function (task) {
      let text = document.createElement("div");
      text.innerHTML = `<div><p>${task.name}</p></div>`;
      toDoList.appendChild(name);
    });
  }
}
