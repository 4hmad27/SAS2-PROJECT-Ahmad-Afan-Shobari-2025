class AllTasks {
    constructor(
      title,
      description,
      status,
      dueDate
    ) {
        this.title = title
        this.description = description
        this.status = status
        this.dueDate = dueDate
    }
    
    async getAllTasks(){
        try {
            return await fetch("https://68258f1d0f0188d7e72d6675.mockapi.io/api/todos", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            ).then((response) => response.json());
        } catch (error) {
            console.log("error while getting data", error)
        }
    }
  
    async deleteAllTasks(id) {
      try {
        const isConfirm = confirm(
            `apakah anda yakin ingin menghapus data ini ${id}?`
          );

          if (isConfirm) {
            const deleteUser = await fetch(
              `https://68258f1d0f0188d7e72d6675.mockapi.io/api/todos/${id}`,
              {
                method: "DELETE",
              }
            );
            // console.log(deleteUser);
            if (deleteUser.ok) {
              alert(`data user dengan id ${id} berhasil dihapus`);
            } else {
              alert(
                `data user dengan id ${id} gagal dihapus :${deleteUser.status}`
              );
            }
          }
      } catch (error) {
        console.error("error while delete data:", error);
      }
    }
  
    editAllTasks(id, newname){
      try {
        if(!id) {
          throw new Error("invalid ID. ID are required");
        }
    
        if(!newname) {
          throw new Error("invalid name. name are required");
        }
  
        let semuaDataJenisPelajaran = this.getJenisPenilaianfromLocalStorage()
        
        console.log("ini yang ada di edit class",semuaDataJenisPelajaran)
        let editDataJenisPelajaran = semuaDataJenisPelajaran.filter((data) => data.jenis_penilaian_id === id)
  
  
        editDataJenisPelajaran[0].nama_jenis_penilaian = newname
        
        this.saveJenisPenilaianToLocalStorage(semuaDataJenisPelajaran)
        alert("you succes for update kategori");
      } catch (error) {
        console.error("error while editing data:", error);
      }
    }
  
    
  }
  export { AllTasks };
  