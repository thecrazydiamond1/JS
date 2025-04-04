// a simple code to understand promise
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false; // Change this to false to test rejection
      if (success) resolve("Data fetched successfully!");
      else reject("Error fetching data");
    }, 2000);
  });
  //nothing happens yet. A promise only runs when .then() or .catch() is called.
  //now lets set it up
  fetchData
  .then((message) => {
    console.log(" Success:", message);
  })
  .catch((error) => {
    console.log(" Error:", error);
  });


  //chaining promises
  function getUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("User data fetched");
        resolve({ id: 1, name: "Alice" });
      }, 2000);
    });
  }
  
  function getPosts(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Posts fetched");
        resolve(["Post 1", "Post 2"]);
      }, 2000);
    });
  }
  
  getUserData()
    .then((user) => {
      console.log(user);
      return getPosts(user); // Returns another Promise
    })
    .then((posts) => {
      console.log("Posts:", posts);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  