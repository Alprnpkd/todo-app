//selectors


const changeMode =document.querySelector("#mode-todo");
const bgİmage = document.querySelector(".bg") ;
const body =document.querySelector("body");
const liMode = document.querySelector(".todo-list") ;
const filterTodo=document.querySelector(".filter-todo");
const inputLight =document.querySelector(".input-dark");
const iconLight =document.querySelector(".light");
const myIcon = document.querySelector(".my-icon");


changeMode.addEventListener("click",() =>{
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
    liMode.className="light-mode" ;
    liMode.transition="1s";
   iconLight.classList.add("light-icon");
    filterTodo.style.backgroundColor="hsl(0, 0%, 98%)" ;
    filterTodo.classList.add("filter-todo-light") ;
    inputLight.className="input-light" ;
    inputLight.transition="1s";
    mySvg.querySelector("path").setAttribute("fill", "red");
    
    
  
    
   
 }
else {
    changeMode.src="/images/icon-sun.svg";
    bgİmage.src="/images/bg-desktop-dark.jpg" ;
    body.style.backgroundColor="hsl(235, 21%, 11%)" ;
    changeMode.className="dark" ;
    liMode.className="todo-list" ;
    filterTodo.style.backgroundColor="hsl(235, 24%, 19%)" ;
    filterTodo.classList.remove("filter-todo-light") ;
    inputLight.className="input-dark" ;
    iconLight.classList.remove("light-icon");
}
     
})