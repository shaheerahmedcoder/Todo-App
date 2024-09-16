//Calling in JavaScript
var todoForm=document.querySelector("#todo");
var ol=document.querySelector("#ol");

function render(){
    for(var i=0; i<array.length; i++){
        ol.innerHTML+=`<li>${array[i]} <button class="edit1" onclick="deleteTodo(${i})">Delete</button> <button class="edit2" onclick="editTodo(${i})">Edit</button></li>`
           }}



var array=[];   //global array!
function addTask(){
    ol.innerHTML="";
    // console.log(todoForm.value);
    array.push(todoForm.value);
    console.log(array);
    // ol.innerHTML+=`<li>${todoForm.value} <button>Delete</button> <button>Edit</button></li>`;
    // todoForm.value="";

//     for(var i=0; i<array.length; i++){
//  ol.innerHTML+=`<li>${array[i]} <button onclick="deleteTodo(${i})">Delete</button> <button onclick="editTodo(${i})">Edit</button></li>`
//     }
//or
render();
    todoForm.value="";
}

//for deleting
function deleteTodo(i){
    ol.innerHTML="";
    console.log("Task "+array[i]+" deleted");
    array.splice(i,1);
    console.log(array);
    render();
    
    
}

//for updating/editing
function editTodo(i){
    ol.innerHTML="";
    console.log("Task "+array[i]+" edited");
  var edit=prompt("Enter value you want to edit");
  array.splice(i,1,edit);
  render();
    
}