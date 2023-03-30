const addBtn = document.getElementById('addTodo');
const input = document.getElementById('enterTodo');
const form = document.getElementById('form');
let todos = document.getElementById("todos");

let todosArr =[];

function addItem(){
  todosArr.pop()
  todosArr.push(input.value)

  localStorage.setItem("todos",JSON.parse(JSON.stringify(todosArr)))
  console.log(localStorage.getItem("todos"))
  let storedTodos = localStorage.getItem("todos")
  
    
   
    
    let make_li = document.createElement("LI");
      make_li.innerHTML= storedTodos
 
      // Adding li to ul
      todos.appendChild(make_li);
 
      // Reset the value of box
      input.value=""
    
  }
onload  = function(){
   let storedTodos = localStorage.getItem("todos")
  
    
   
    
    let make_li = document.createElement("LI");
      make_li.innerHTML= storedTodos
 
      // Adding li to ul
      todos.appendChild(make_li);
 
      // Reset the value of box
      input.value=""
} 
    

