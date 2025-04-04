async function deletePost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE"
    });

    if (response.ok) {
      console.log("Post deleted successfully!");
    } else {
      console.log("Error deleting post");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

deletePost();
