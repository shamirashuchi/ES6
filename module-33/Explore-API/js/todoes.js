function loadTodoes(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
      .then(data => displayTodo(data))
}
function displayTodo(todos){
    const todocontainer = document.getElementById("todo-container");
    for(const todo of todos){
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
        <h3>title-${todo.title}</h3>
        <p>Post:${todo.userId}</p>
        <p>Is completed:${todo.completed ===true ? 'complete': 'not complete' }</p>
        `;
        todocontainer.appendChild(todoDiv);
    }
}
loadTodoes();