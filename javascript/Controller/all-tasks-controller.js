import { AllTasks } from "../Model/AllTasks.js";

const DataAllTasksManager = new AllTasks();

const tableBody = document.querySelector("#all-tasks-table tbody");

// console.log(DataAllTasksManager.getAllTasks())
async function renderAllTasks() {
  tableBody.innerHTML = "";

  let semuaDataAllTasks = await fetch("https://68258f1d0f0188d7e72d6675.mockapi.io/api/todos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
).then((response) => response.json());

//   semuaDataAllTasks = semuaDataAllTasks.json()

  semuaDataAllTasks.forEach((AllTasks) => {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${AllTasks.id}</td>
    <td>${AllTasks.title}</td>
    <td>${AllTasks.description}</td>
    <td>${AllTasks.is_complated === true ? "complated" : "not complated"}</td>
    <td>${AllTasks.dueDate}</td>
    <td>
    <button id="edit-${AllTasks.id}" class="btn btn-warning text-dark">Edit</button>
    <button id="delete-${AllTasks.id}" class="btn btn-danger">Delete</button>
    </td>
`;

    tableBody.appendChild(row);
    
});
}


function editJenisPelajaran(id) {
  renderAllTasks();
}

function deleteJenisPelajaran(id) {}

document.addEventListener("DOMContentLoaded", () => {
  renderAllTasks();
});
