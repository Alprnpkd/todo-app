//selectors


const changeMode =document.querySelector("#mode-todo");
const bgİmage = document.querySelector(".bg") ;
const body =document.querySelector("body");
const ul = document.querySelector(".todo-list") ;
const filterTodo=document.querySelector(".filter-todo");
const inputLight =document.querySelector(".input-dark");
const iconLight =document.querySelector(".light");
const myIcon = document.querySelector(".my-icon");
const taskInput=document.querySelector(".input") ;
const filter =document.querySelector(".filter") ;
const addBtn=document.querySelector(".addbtn") ;


//listeners

changeMode.addEventListener("click",lightMode);
addBtn.addEventListener("click",newTask) ;







//functions

function lightMode() {



console.log("tıklandı");
const path = myIcon.querySelector("path");


 if(changeMode.classList.contains("dark")) {
    path.setAttribute("fill", "#297C6B");
    changeMode.src="/images/icon-moon.svg" ; 
    changeMode.style.transition="1s" ;
     bgİmage.src="/images/bg-desktop-light.jpg" ;
     bgİmage.style.transition="1s" ;
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
    bgİmage.src="/images/bg-desktop-dark.jpg" ;
    body.style.backgroundColor="hsl(235, 21%, 11%)" ;
    changeMode.className="dark" ;
    ul.className="todo-list" ;
    filterTodo.style.backgroundColor="hsl(235, 24%, 19%)" ;
    filterTodo.classList.remove("filter-todo-light") ;
    inputLight.className="input-dark" ;
    iconLight.classList.remove("light-icon");
}
     

}


const taskList = [
     {"id":1,"taskName":"Görev 1" ,"status":"pending"},
     {"id":2,"taskName":"Görev 2" ,"status":"pending"},
     {"id":3,"taskName":"Görev 3" ,"status":"pending"},
     {"id":4,"taskName":"Görev 4" ,"status":"pending"},
    
] ;



displayTask();

function displayTask() {
    
    
ul.innerHTML="";

if(taskList.length == 0 ) {
    ul.innerHTML="<p>Görev Listesi Boş";
}
else {
    
for(let task of taskList) {
    let li=`
    <li>
    <input class="" type="checkbox" id="${task.id}">
    <label for="${task.id}" onclick="filterTask(${task.id})">${task.taskName}</label>
    <svg class="my-icon" onclick="deleteTask(${task.id})" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
  </li>
    
    `;
    ul.insertAdjacentHTML("beforeend",li) ;
}
let left = ` <p>${taskList.length} items left</p>
 `;
 filter.querySelector("p").innerHTML = left;







}


}
function newTask(e){

  let gorevler =taskInput.value.trim();

  if(gorevler.length==0)  {
     console.log("Bir sayı giriniz");
  }
  else{
    taskList.push({"id" : taskList.length+1,"taskName" : taskInput.value ,"status" :"pending"});
    displayTask();
  }

  event.preventDefault();
  
 

   
   
}

function deleteTask(id) {

    
   console.log("tıklandı");
console.log(id);
 let deleteId;
   for(let index in taskList) {

    if(taskList[index].id == id) {
console.log("true");
        deleteId = index ;
        console.log(deleteId);

    }
    
   }
  
   taskList.splice(deleteId, 1) ;
   displayTask() ;


}

function clearTask(){
    
  
}

function filterTask(id){
    for(let filter in taskList) {

        if(taskList[filter].id == id) {
    console.log("true");
           
    
        }
        
       }
}
