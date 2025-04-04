//using fetch to make a GET request to a public API and log the response
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json()) // Convert response to JSON
  .then(data => console.log(data))   // Log the received JSON data
  .catch(error => console.error("Error:", error));
//  output  {
//     userId: 1,
//     id: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\n' +
//       'suscipit recusandae consequuntur expedita et cum\n' +
//       'reprehenderit molestiae ut ut quas totam\n' +
//       'nostrum rerum est autem sunt rem eveniet architecto'
//   }


//using async/await to make a GET request to a public API and log the response
async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  }
  
  fetchData();
  //  output  {
//     userId: 1,
//     id: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\n' +
//       'suscipit recusandae consequuntur expedita et cum\n' +
//       'reprehenderit molestiae ut ut quas totam\n' +
//       'nostrum rerum est autem sunt rem eveniet architecto'
//   }