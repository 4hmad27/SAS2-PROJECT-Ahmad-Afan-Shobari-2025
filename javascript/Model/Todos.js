class TodoList {  

  //function delete
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

  //function edit
  async editAllTasks(id, title, description, status, date) {
    try {
      console.log(id, title, description, status, date);
      if(!id, !title, !description, !status, !date){
        throw new error("halah eroro", error)
      }
      const editData = await fetch(
        `https://68258f1d0f0188d7e72d6675.mockapi.io/api/todos/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            description: description,
            is_completed: status,
            dueDate: date,
          }),
        }
      );
      console.log(editData);
      if (!editData.ok) {
        throw new Error(`HTTP error! status: ${editData.status}`);
      }

      const data = await editData.json();
      console.log(data);
      alert(`data user dengan id ${id} berhasil diupdate`);
    } catch (error) {
      console.error("error while editing data:", error);
    }
  }

  //function add
  async addCreateTasks(title, description, status, dueDate) {
    try {
      console.log(title, description, status, dueDate);

      const response = await fetch(
        "https://68258f1d0f0188d7e72d6675.mockapi.io/api/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            description: description,
            is_completed: status,
            dueDate: dueDate,
          }),
        }
      );
      console.log(response);

      if (!response.ok) {
        throw new error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error adding in database:", error);
    }
  }
}
export { TodoList }
