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
    
  
    addJenisPelajaran(oldId, name) {
      try {
        const newId = this.generateJenisPelajaranId();
  
        if (!name) {
          throw new Error("nama Kategori Pelajaran are required");
        }
  
        if (oldId === "") {
          const semuaDataJenisPelajaran =
            this.getJenisPenilaianfromLocalStorage();
  
          const dataBaruJenisPelajaran = new jenisPenilaian(newId, name);
  
          semuaDataJenisPelajaran.push(dataBaruJenisPelajaran);
          this.saveJenisPenilaianToLocalStorage(semuaDataJenisPelajaran);
          console.log("old id belum ada")
          alert("you succes for add kategori");
        } else {
          this.editjenisPelajaran(oldId, name);
          console.log("old id sudah ada")
        }
      } catch (error) {
        console.log("error adding in local storage:", error);
      }
    }
    generateJenisPelajaranId() {
      const timestamp = Date.now().toString().slice(-6);
      return `KAT-${timestamp}`;
    }
    deleteJenisPelajaran(id) {
      try {
        if (!id) {
          throw new Error("invalid ID. ID are required");
        }
        let semuaDataJenisPelajaran = this.getJenisPenilaianfromLocalStorage();
  
        semuaDataJenisPelajaran = semuaDataJenisPelajaran.filter(
          (data) => data.jenis_penilaian_id !== id
        );
        this.saveJenisPenilaianToLocalStorage(semuaDataJenisPelajaran)
      } catch (error) {
        console.error("error while delete data:", error);
      }
    }
  
    editjenisPelajaran(id, newname){
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
  