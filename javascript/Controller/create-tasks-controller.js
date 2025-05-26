import { TodoList } from "../Model/Todos.js";

const createForm = document.getElementById("create-form");
const DataTodosManager = new TodoList();

//fucntion add
createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  let status = document.getElementById("status").value;
  if (status === "completed") {
    status = true;
  } else {
    status = false;
  }
  const dueDate = document.getElementById("due-date").value;

  DataTodosManager.addCreateTasks(title, description, status, dueDate);
  createForm.reset();
});
