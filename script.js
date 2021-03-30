const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption =document.querySelector(".filter-todo");

///////////////events listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteChecked);
filterOption.addEventListener('click', filterTodo)





///////////////// function
function addTodo(event){
    event.preventDefault();
    //todo div
    const todoDiv =  document.createElement("div");
    todoDiv.classList.add("todo");
    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText= todoInput.value;
    todoDiv.appendChild(newTodo)
    ////// add todo to localstorage
    savaLocalTodos(todoInput.value);
    //// CHECK MARK button
    const completeButton = document.createElement('button');
    completeButton.innerHTML ='<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    //// TRASH MARK button
    const trashButton = document.createElement('button');
    trashButton.innerHTML ='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // appending   list
    todoList.appendChild(todoDiv);
    // to input clear 

    todoInput.value="";
}
///////////////delete functoin

function deleteChecked(e){
    const item =e.target;
    //delete todo
    if(item.classList[0] === "trash-btn")
    { 
    const todo =item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function(){
        todo.remove();

    });

}
 /////         check mark 
  if(item.classList[0]==="complete-btn"){
      const todo = item.parentElement;
      todo.classList.toggle("completed")
  }


}
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";

                }else {
                    todo.style.display ="none";
                }  
                break;
                case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display="flex"
                }else{
                    todo.style.display="none"

                }
                break;
        }
    })
}


function savaLocalTodos(todo){
    ////check if already have things there 
    let todos;
    if(localStorage.getItem("todos")=== null){
        todos =[];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))
}













