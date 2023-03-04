(() => {
  // src/app.js
  var changeMode = document.querySelector("#mode-todo");
  var body = document.querySelector("body");
  var ul = document.querySelector(".todo-list");
  var filterTodo = document.querySelector(".filter-todo");
  var inputLight = document.querySelector(".input-dark");
  var iconLight = document.querySelector(".light");
  var myIcon = document.querySelector(".my-icon");
  var taskInput = document.querySelector(".input");
  var taskCount = document.querySelector(".count");
  var addBtn = document.querySelector(".addbtn");
  var filters = document.querySelectorAll(".filters p");
  var clear = document.querySelector(".clear");
  var bgImage = document.querySelector(".bg-img-dark");
  changeMode.addEventListener("click", lightMode);
  addBtn.addEventListener("click", newTask);
  clear.addEventListener("click", clearTask);
  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      addBtn.click();
    }
  });
  var taskList = [
    // {"id":1,"taskName":"Görev 1" ,"status":"pending"},
    // {"id":2,"taskName":"Görev 2" ,"status":"completed"},
    // {"id":3,"taskName":"Görev 3" ,"status":"pending"},
    // {"id":4,"taskName":"Görev 4" ,"status":"completed"},
  ];
  for (let p of filters) {
    p.addEventListener("click", () => {
      document.querySelector(".filters p.active").classList.remove("active");
      p.classList.add("active");
      displayTask(p.id);
    });
  }
  if (localStorage.getItem("taskList") !== null) {
    taskList = JSON.parse(localStorage.getItem("taskList"));
  }
  displayTask("all");
  function lightMode() {
    const path = myIcon.querySelector("path");
    if (changeMode.classList.contains("dark")) {
      path.setAttribute("fill", "#297C6B");
      changeMode.src = "/images/icon-moon.svg";
      changeMode.style.transition = "1s";
      bgImage.className = "bg-img-light";
      bgImage.style.transition = "1s";
      changeMode.className = "light";
      body.style.backgroundColor = "hsl(236, 33%, 92%) ";
      body.style.transition = "0.2s";
      ul.className = "light-mode";
      ul.transition = "1s";
      iconLight.classList.add("light-icon");
      filterTodo.style.backgroundColor = "hsl(0, 0%, 98%)";
      filterTodo.classList.add("filter-todo-light");
      inputLight.className = "input-light";
      inputLight.transition = "1s";
    } else {
      changeMode.src = "/images/icon-sun.svg";
      bgImage.className = "bg-img-dark";
      body.style.backgroundColor = "hsl(235, 21%, 11%)";
      changeMode.className = "dark";
      ul.className = "todo-list";
      filterTodo.style.backgroundColor = "hsl(235, 24%, 19%)";
      filterTodo.classList.remove("filter-todo-light");
      inputLight.className = "input-dark";
      iconLight.classList.remove("light-icon");
    }
  }
  function displayTask(filter) {
    ul.innerHTML = "";
    if (taskList.length == 0) {
      ul.innerHTML = "<p class='empty'>G\xF6rev Listesi Bo\u015F</p>";
    } else {
      for (let task of taskList) {
        let completed = task.status == "completed" ? "checked" : " ";
        if (filter == task.status || filter == "all") {
          let li = `
    <li>
    <input class="" type="checkbox" onclick="updateStatus(this)" id="${task.id}" ${completed}>
    <label for="${task.id}"   ${completed}>${task.taskName}</label>
    <svg class="my-icon" onclick="deleteTask(${task.id})" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
  </li>
    
    `;
          ul.insertAdjacentHTML("beforeend", li);
        }
      }
      let left = ` <p>${taskList.length} items left</p>
 `;
      taskCount.querySelector("p").innerHTML = left;
    }
  }
  function newTask(e) {
    let gorevler = taskInput.value.trim();
    if (gorevler.length == 0) {
    } else {
      taskList.push({ "id": taskList.length + 1, "taskName": taskInput.value, "status": "pending" });
      displayTask(document.querySelector(".filters p.active").id);
      localStorage.setItem("taskList", JSON.stringify(taskList));
      taskInput.value = "";
    }
    e.preventDefault();
  }
  function clearTask() {
    for (let i = taskList.length - 1; i >= 0; i--) {
      if (taskList[i].status === "completed") {
        taskList.splice(i, 1);
      }
    }
    localStorage.setItem("taskList", JSON.stringify(taskList));
    let left = ` <p>${taskList.length} items left</p>
 `;
    taskCount.querySelector("p").innerHTML = left;
    displayTask(document.querySelector(".filters p.active").id);
  }
})();
