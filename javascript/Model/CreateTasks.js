class CreateTasks {
  
      async addCreateTasks(title, description, status, dueDate) {
      try {
        console.log(title, description, status, dueDate)

        const response = await fetch(
          "https://68258f1d0f0188d7e72d6675.mockapi.io/api/todos",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                "title": title,
                "description": description,
                "is_completed": status,
                "dueDate": dueDate,
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
  export { CreateTasks };
  