import { TodoList } from "../Model/Todos.js";

const DataTodoListManagers = new TodoList();


const tableBody = document.querySelector("#all-tasks-table tbody");
const editForm = document.querySelector("#edit-form");


//function render
  async function renderAllTasks() {
  tableBody.innerHTML = "";

  let semuaDataAllTasks = await fetch(
    "https://68258f1d0f0188d7e72d6675.mockapi.io/api/todos",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());
  console.log(semuaDataAllTasks);


  semuaDataAllTasks.forEach((AllTasks) => {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${AllTasks.id}</td>
    <td>${AllTasks.title}</td>
    <td>${AllTasks.description}</td>
    <td>${AllTasks.is_complated === true ? "complated" : "not complated"}</td>
    <td>${AllTasks.dueDate}</td>
    <td>
    <button id="edit-${
      AllTasks.id
    }" class="btn btn-warning text-dark" data-bs-toggle="modal" data-bs-target="#detailModal">Edit</button>
    <button id="delete-${AllTasks.id}" class="btn btn-danger">Delete</button>
    </td>
`;
    tableBody.appendChild(row);

    document
      .getElementById(`edit-${AllTasks.id}`)
      .addEventListener("click", (event) => {
        event.preventDefault();
        editAllTasks(AllTasks.id);
      });

    document
      .getElementById(`delete-${AllTasks.id}`)
      .addEventListener("click", (event) => {
        event.preventDefault();
        deleteAllTasks(AllTasks.id);
      });
  });
}

//function edit
async function editAllTasks(id) {
  let semuaDataAllTasks = await fetch(
    `https://68258f1d0f0188d7e72d6675.mockapi.io/api/todos/${id}`
  );

  const dataAllTasks = await semuaDataAllTasks.json();

  console.log(dataAllTasks);

  document.getElementById("oldId").value = id;
  document.getElementById("title").value = dataAllTasks.title;
  document.getElementById("description").value = dataAllTasks.description;
  document.getElementById("due-date").value = dataAllTasks.dueDate;
  if (dataAllTasks.is_complated === true) {
    document.getElementById("completed").setAttribute("selected", "true");
  } else {
    document.getElementById("not-completed").setAttribute("selected", "true");
  }

  console.log("hehe berhasil", id);
}

editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const oldId = document.getElementById("oldId").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  let status = document.getElementById("status").value;
  if (status === "completed") {
    status = true;
  } else {
    status = false;
  }
  const dueDate = document.getElementById("due-date").value;

  DataTodoListManagers.editAllTasks(oldId, title, description, status, dueDate);

});

//function delete
function deleteAllTasks(id) {
  DataTodoListManagers.deleteAllTasks(id);
  
}

document.addEventListener("DOMContentLoaded", () => {
  renderAllTasks();
});
