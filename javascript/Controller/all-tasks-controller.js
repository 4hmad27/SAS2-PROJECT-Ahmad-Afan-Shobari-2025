import { AllTasks } from "../Model/AllTasks.js";


const DataAllTasks = new AllTasks()

jenisPenilaianForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const oldId = document.getElementById("oldId").value;
  const name = document.getElementById("name").value;

  DataPenilaianManager.addJenisPelajaran(oldId, name);
  
  jenisPenilaianForm.reset();
  renderJenisPelajaran();
});
// const datadefault = DataPenilaianManager.getJenisPenilaianfromLocalStorage()

// console.log(datadefault)
function renderJenisPelajaran() {
tableBody.innerHTML = ""

// console.log(filteredData)

  const semuaDataJenisPelajaran =
    DataPenilaianManager.getJenisPenilaianfromLocalStorage();
    const semuaDataLogin = dataLoginManager.getLoginFromLocalStorage();
  //   console.log("keadaan data di render:", semuaDataJenisPelajaran)

  // console.log("semua data ketegori pelajaran:", semuaDataJenisPelajaran);
if(semuaDataLogin[0].role === "admin"|| semuaDataLogin[0].role === "guru"|| semuaDataLogin[0].role === "musyrif"){
  semuaDataJenisPelajaran.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${data.jenis_penilaian_id}</td>
        <td>${data.nama_jenis_penilaian}</td>
        <td>${data.created_at}</td>
        <td>
        <button class="btn btn-warning" id="edit-${data.jenis_penilaian_id}">Edit</button>
        <button class="btn btn-danger" id="delete-${data.jenis_penilaian_id}">Delete</button>
        </td>
        `;
    tableBody.appendChild(row);
console.log("saya op")
document
.getElementById(`delete-${data.jenis_penilaian_id}`)
.addEventListener("click", () => {
  deleteJenisPelajaran(data.jenis_penilaian_id);
      });
    document
      .getElementById(`edit-${data.jenis_penilaian_id}`)
      .addEventListener("click", () => {
        editJenisPelajaran(data.jenis_penilaian_id);
      });
  });
} else if(semuaDataLogin[0].role === "santri"|| semuaDataLogin[0].role === "orang_tua"){
  semuaDataJenisPelajaran.forEach((data) => {
    const row = document.createElement("tr");
    console.log("saya tidak op")
    row.innerHTML = `
    <td>${data.jenis_penilaian_id}</td>
        <td>${data.nama_jenis_penilaian}</td>
        <td>${data.created_at}</td>
        `;
    tableBody.appendChild(row);
      
  });
}
}

function editJenisPelajaran(id) {
  const semuaDataJenisPelajaran =
    DataPenilaianManager.getJenisPenilaianfromLocalStorage();

  console.log("keadaan local storage di edit :", semuaDataJenisPelajaran);
  console.log(id);
  
  const editDataJenisPelajaran = semuaDataJenisPelajaran.filter(
      (data) => data.jenis_penilaian_id === id
    );

  document.getElementById("name").value =
    editDataJenisPelajaran[0].nama_jenis_penilaian;
  document.getElementById("oldId").value =
  editDataJenisPelajaran[0].jenis_penilaian_id;

  renderJenisPelajaran();
}


function deleteJenisPelajaran(id) {
  DataPenilaianManager.deleteJenisPelajaran(id);
  renderJenisPelajaran();
}

document.addEventListener("DOMContentLoaded", () => {
    renderJenisPelajaran();
});





