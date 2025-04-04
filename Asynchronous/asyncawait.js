//use of async
async function myAsyncFunction() {
    return "Hello, world!";
  }
  
  myAsyncFunction().then(result => console.log(result));  // "Hello, world!"
  //Here, myAsyncFunction() is an async function that implicitly returns a Promise. When it resolves, it returns "Hello, world!".

  //use of await 
  async function example() {
    const result = await myAsyncFunction();
    console.log(result); // Logs the result after the Promise resolves
  }
  //Here, await tells the JavaScript engine to pause at that line and wait for the Promise to resolve before continuing to the next line. It doesn't block the entire execution of the code, but only the function that uses await.


//error handling using async/await and try/catch
async function fetchDataWithErrorHandling() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1000'); // Non-existent user
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error:", error.message);  // "Error: User not found"
    }
  }
  
  fetchDataWithErrorHandling();
  