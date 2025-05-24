import { CreateTasks } from "../Model/CreateTasks.js";

const createForm = document.getElementById("create-form");
const DataCreate = new CreateTasks();

createForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    let status = document.getElementById("status").value;
    if(status === "completed"){
        status = true;
    }else{
        status = false;
    }
    const dueDate = document.getElementById("due-date").value;


    DataCreate.addCreateTasks(title, description, status, dueDate)
    createForm.reset()
})