(() => {
  // src/app.js
  var changeMode = document.querySelector("#mode-todo");
  var bg\u0130mage = document.querySelector(".bg");
  var body = document.querySelector("body");
  var liMode = document.querySelector(".todo-list");
  var filterTodo = document.querySelector(".filter-todo");
  var inputLight = document.querySelector(".input-dark");
  var iconLight = document.querySelector(".light");
  var myIcon = document.querySelector(".my-icon");
  changeMode.addEventListener("click", () => {
    console.log("t\u0131kland\u0131");
    const path = myIcon.querySelector("path");
    if (changeMode.classList.contains("dark")) {
      path.setAttribute("fill", "#297C6B");
      changeMode.src = "/images/icon-moon.svg";
      changeMode.style.transition = "1s";
      bg\u0130mage.src = "/images/bg-desktop-light.jpg";
      bg\u0130mage.style.transition = "1s";
      changeMode.className = "light";
      body.style.backgroundColor = "hsl(236, 33%, 92%) ";
      body.style.transition = "0.2s";
      liMode.className = "light-mode";
      liMode.transition = "1s";
      iconLight.classList.add("light-icon");
      filterTodo.style.backgroundColor = "hsl(0, 0%, 98%)";
      filterTodo.classList.add("filter-todo-light");
      inputLight.className = "input-light";
      inputLight.transition = "1s";
    } else {
      changeMode.src = "/images/icon-sun.svg";
      bg\u0130mage.src = "/images/bg-desktop-dark.jpg";
      body.style.backgroundColor = "hsl(235, 21%, 11%)";
      changeMode.className = "dark";
      liMode.className = "todo-list";
      filterTodo.style.backgroundColor = "hsl(235, 24%, 19%)";
      filterTodo.classList.remove("filter-todo-light");
      inputLight.className = "input-dark";
      iconLight.classList.remove("light-icon");
    }
  });
  var taskList = [
    { "id": 1, "taskName": "G\xF6rev 1", "status": "pending" },
    { "id": 2, "taskName": "G\xF6rev 2", "status": "pending" },
    { "id": 3, "taskName": "G\xF6rev 3", "status": "pending" },
    { "id": 4, "taskName": "G\xF6rev 4", "status": "pending" }
  ];
  console.log(taskList);
})();
