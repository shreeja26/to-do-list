//getting elements
const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');


//adding addeventlistner
todobutton.addEventListener('click', addtodo);
todolist.addEventListener('click',deletecheck);







//adding function
function addtodo(event){
    event.preventDefault();
    //create div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create li
    const newtodo = document.createElement('li');
    newtodo.innerText = todoinput.value;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);
    //create mark button
    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    completedbutton.classList.add('complete-btn');
    todoDiv.appendChild(completedbutton);
    //create trash button
    const trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    trashbutton.classList.add('trash-btn');
    todoDiv.appendChild(trashbutton);
    todolist.appendChild(todoDiv);
    //clear todo value
    todoinput.value = "";

}

function deletecheck(e){
    const item = e.target;
    if(item.classList[0]==="trash-btn")
    {
         const todo = item.parentElement;
         todo.classList.add('fall');
         todo.addEventListener('transitionend', ()=> {
             todo.remove();
         });
    }
    if(item.classList[0]==="complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


