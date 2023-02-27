function loadTodoes(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
      .then(data => displayTodo(data))
}
function displayTodo(todos){
    console.log(todos);
    const todocontainer = document.getElementById("todo-container");
    for(const todo of todos){
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
        <h3>name-${todo.name}</h3>
        <p>id:${todo.postId}</p>
        <p>Is completed:${todo.completed ===true ? 'complete': 'not complete' }</p>
        `;
        todocontainer.appendChild(todoDiv);
    }
}
loadTodoes();