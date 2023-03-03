//selectors


const changeMode =document.querySelector("#mode-todo");

const body =document.querySelector("body");
const ul = document.querySelector(".todo-list") ;
const filterTodo=document.querySelector(".filter-todo");
const inputLight =document.querySelector(".input-dark");
const iconLight =document.querySelector(".light");
const myIcon = document.querySelector(".my-icon");
const taskInput=document.querySelector(".input") ;
const taskCount =document.querySelector(".count") ;
const addBtn=document.querySelector(".addbtn") ;
const filters =document.querySelectorAll(".filters p") ;
const clear=document.querySelector(".clear");
const bgImage = document.querySelector(".bg-img-dark") ;





//listeners

changeMode.addEventListener("click",lightMode);
addBtn.addEventListener("click",newTask) ;
clear.addEventListener("click",clearTask) ;

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
     addBtn.click();
  }
});

//Task Array 


const taskList = [
  // {"id":1,"taskName":"Görev 1" ,"status":"pending"},
  // {"id":2,"taskName":"Görev 2" ,"status":"completed"},
  // {"id":3,"taskName":"Görev 3" ,"status":"pending"},
  // {"id":4,"taskName":"Görev 4" ,"status":"completed"},
 
] ;


//filter

for(let p of filters) {
  
  p.addEventListener("click", () => {
   
    document.querySelector(".filters p.active").classList.remove("active");
    p.classList.add("active") ;
    displayTask(p.id) ;
  });
 
}





//functions

function lightMode() {




const path = myIcon.querySelector("path");


 if(changeMode.classList.contains("dark")) {
    path.setAttribute("fill", "#297C6B");
    changeMode.src="/images/icon-moon.svg" ; 
    changeMode.style.transition="1s" ;
     bgImage.className="bg-img-light" ;
     bgImage.style.transition="1s" ;
    changeMode.className="light" ; 
    body.style.backgroundColor="hsl(236, 33%, 92%) " ;
    body.style.transition="0.2s" ;
    ul.className="light-mode" ;
    ul.transition="1s";
   iconLight.classList.add("light-icon");
    filterTodo.style.backgroundColor="hsl(0, 0%, 98%)" ;
    filterTodo.classList.add("filter-todo-light") ;
    inputLight.className="input-light" ;
    inputLight.transition="1s";
   
}
    
else {
    changeMode.src="/images/icon-sun.svg";
    bgImage.className="bg-img-dark" ;
    body.style.backgroundColor="hsl(235, 21%, 11%)" ;
    changeMode.className="dark" ;
    ul.className="todo-list" ;
    filterTodo.style.backgroundColor="hsl(235, 24%, 19%)" ;
    filterTodo.classList.remove("filter-todo-light") ;
    inputLight.className="input-dark" ;
    iconLight.classList.remove("light-icon");
}
     

}






displayTask("all");

function displayTask(filter) {
    
    
ul.innerHTML="";

if(taskList.length == 0 ) {
    ul.innerHTML="<p class='empty'>Görev Listesi Boş</p>";
    
    
}
else {
    
for(let task of taskList) {

  let completed = task.status=="completed" ? "checked" : " " ;

  if(filter == task.status || filter=="all") {
    let li=`
    <li>
    <input class="" type="checkbox" onclick="updateStatus(this)" id="${task.id}" ${completed}>
    <label for="${task.id}"   ${completed}>${task.taskName}</label>
    <svg class="my-icon" onclick="deleteTask(${task.id})" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
  </li>
    
    `;
    ul.insertAdjacentHTML("beforeend",li) ;
  }
  
 
}
let left = ` <p>${taskList.length} items left</p>
 `;
 taskCount.querySelector("p").innerHTML = left;







}


}
function newTask(e){

  let gorevler =taskInput.value.trim();

  if(gorevler.length==0)  {
     
  }
  else{
    taskList.push({"id" : taskList.length+1,"taskName" : taskInput.value ,"status" :"pending"});
    displayTask( document.querySelector(".filters p.active").id);
    taskInput.value="" ;
  }
  

  event.preventDefault();
  
 

   
   
}
function updateStatus(selectedTask) {

  let label = selectedTask.nextElementSibling ;
 let status ;
  if(selectedTask.checked) {
    status = "completed" ;
  }
  else {
    status ="pending" ;
  }
  for (let task of taskList) {
    if(task.id ==selectedTask.id) {
      task.status = status ;
    }
  }

}

function deleteTask(id) {

    
  
 let deleteId;
   for(let index in taskList) {

    if(taskList[index].id == id) {

        deleteId = index ;
        

    }
    
   }
  
   taskList.splice(deleteId, 1) ;
   displayTask( document.querySelector(".filters p.active").id);


}

function clearTask() {
  for (let i = taskList.length - 1; i >= 0; i--) {
    if (taskList[i].status === "completed") {
      taskList.splice(i, 1);
      
    }
  }
  displayTask( document.querySelector(".filters p.active").id);


}


