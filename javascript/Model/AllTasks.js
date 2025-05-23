class AllTasks {
  async getAllTasks() {
    try {
      return await fetch(
        "https://68258f1d0f0188d7e72d6675.mockapi.io/api/todos",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => response.json());
    } catch (error) {
      console.log("error while getting data", error);
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

  async editAllTasks(id, title, description, status, date) {
    try {
        console.log(id, title, description, status, date);
      const editData = await fetch(
        `https://68258f1d0f0188d7e72d6675.mockapi.io/api/todos/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "title": title,
            "description": description,
            "is_completed": status,
            "dueDate": date,
          }),
        }
      );
      console.log(editData);
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }

      const data = await editData.json();
      console.log(data);
      alert(`data user dengan id ${id} berhasil diupdate`);
    } catch (error) {
      console.error("error while editing data:", error);
    }
  }
}
export { AllTasks };
