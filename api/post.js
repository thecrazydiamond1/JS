async function createPost() {
    const postData = {
      title: "New Post",
      body: "This is a test post.",
      userId: 1
    };
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData)
      });
  
      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  createPost();
  //output  {Response: { title: 'New Post', body: 'This is a test post.', userId: 1, id: 101 }


// The fetch() function is used to make an HTTP request to the specified URL ("https://jsonplaceholder.typicode.com/posts").
// This is a POST request, meaning you want to send data to the server to create a new resource (in this case, a new post).
// The method: "POST" option
// This specifies the HTTP method used for the request. POST means you're submitting data to the server.
// It's typically used when creating or submitting new resources (like adding a new post).
// The headers: { "Content-Type": "application/json" } option
// headers tell the server what type of data you're sending.
// Content-Type: "application/json" means that the body of the request is in JSON format. The server expects to receive JSON data, not form data or other formats.
// The body: JSON.stringify(postData) option
// body contains the data you want to send to the server.
// JSON.stringify(postData) converts the JavaScript object postData into a JSON string, as the server expects the data in JSON format.