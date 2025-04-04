async function updatePost() {
    const updatedData = {
      title: "Updated Post",
      body: "This post has been updated.",
      userId: 1
    };
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData)
      });
  
      const data = await response.json();
      console.log("Updated Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  updatePost();


//output    Updated Response: {
//     title: 'Updated Post',
//     body: 'This post has been updated.',
//     userId: 1,
//     id: 1
//   }
// The PUT method is used to update an existing resource on the server. In this case, you're updating the post with ID 1.