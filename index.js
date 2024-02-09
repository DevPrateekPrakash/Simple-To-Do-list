alert("Js is connected")

const addForm= document.querySelector(".add")
const task= document.querySelector(".tasks")




addForm.addEventListener("submit", event=>{
    event.preventDefault()
    const value=addForm.task.value.trim()
    if(value.length){
        console.log(value);
        task.innerHTML+=`<li>
        <span class="task">${value}</span>
        <i class="bi bi-trash delete"></i> 
    </li>`
        addForm.reset();
    }
    
})