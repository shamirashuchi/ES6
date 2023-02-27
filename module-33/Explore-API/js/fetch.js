// fetch('https://jsonplaceholder.typicode.com/todos/1')//fetch function call hoise r parameter hisebe API ba url nise
//       .then(response => console.log(response))//.json is not similar but close to json.parse(parse string ke javascript object e pathaito)
//.then(json => console.log(json))

const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))

function loadData(){
    fetch(url)
    .then(response => response.json())
     .then(json => console.log(json))
}