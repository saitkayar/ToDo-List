const add=document.querySelector("#add")
const inputt=document.querySelector("#input");
const list=document.querySelector("#list")

const start=e=>{
const todos=localStorage.getItem("todos")
if (!todos) {
    localStorage.setItem("todos",JSON.stringify([]))
}
}
start();
add.addEventListener('click',e=>{
e.preventDefault();
todoText=inputt.text;
if(inputt.text==null && inputt.value==0 )
{
    alert("please add something")
    return start;
}
const todo={text:todoText,

};
const todos=JSON.parse(localStorage.getItem("todos"))
console.log(todos)
todos.push(todo);
localStorage.setItem("todos",JSON.stringify(todos)  )

const todoLi=document.createElement("li");
todoLi.classList.add('list-group-item','list-group-item-info')
const closee=document.createElement("span")
closee.id='close'
closee.innerHTML="X";
closee.style="float:right"


todoLi.textContent=inputt.value;

list.appendChild(todoLi)
todoLi.appendChild(closee)


closee.addEventListener('click',e=>{
    e.preventDefault();
    todoLi.remove()
   
})
if (closee) {
    closee.addEventListener('click', function () {

      var toast = new bootstrap.Toast(toastLiveExample)
 var bodyy=document.getElementById("body")
 bodyy.textContent="Item Deleted"
      toast.show()
    })
  }


})

var toastLiveExample = document.getElementById('liveToast')
if (inputt.text==null && inputt.value==0 ) {
    if (add) {
        add.addEventListener('click', function () {
          var toast = new bootstrap.Toast(toastLiveExample)
      
          toast.show()
        })
      }
      
}





