alert("Js is connected")
const addForm= document.querySelector(".add")
const tasks= document.querySelector(".tasks")
const clearAll= document.querySelector(".clear")
const messageSpan=document.querySelector(".message span")
const searchForm=document.querySelector(".search")

function updatetask(){
    const taskno = tasks.children.length
    messageSpan.textContent=`You have ${taskno} pending task`
}

updatetask()

addForm.addEventListener("submit", event=>{
    event.preventDefault()
    const value=addForm.task.value.trim()
    if(value.length){
        tasks.innerHTML+=`<li>
        <span class="task">${value}</span>
        <i class="bi bi-trash delete"></i> 
    </li>`
        addForm.reset();
        updatetask()
    }
     
})

tasks.addEventListener("click", event=>{
    event.preventDefault()
    if(event.target.classList.contains("delete")){
        console.log("delete button clicked")
        event.target.parentElement.remove();
        updatetask()
    }
})

clearAll.addEventListener("click", event=>{
    const taskItems=tasks.querySelectorAll("li").toLowerCase()
    taskItems.forEach(item =>{
        item.remove()
        updatetask()
    })
})

searchForm.addEventListener("keyup", event=>{
    const term=searchForm.task.value.trim().toLowerCase()
    filterTask(term)

    
})

searchForm.addEventListener("click", event =>{
    if(event.target.classList.contains("reset")){
        searchForm.reset()
        const term=searchForm.task.value.trim().toLowerCase()
        filterTask(term)
    }
})

function filterTask(term){
    const list=Array.from(tasks.children).filter(task =>{
        return !task.textContent.toLowerCase().includes(term)
    }).forEach(task =>{
        task.classList.add("hide")
    })
    Array.from(tasks.children).filter(task =>{
        return task
    .textContent.toLowerCase().includes(term)}).forEach(task => {
        task.classList.remove("hide")
    })

}

