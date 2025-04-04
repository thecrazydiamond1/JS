function fetchData(callback) {
    setTimeout(() => {
      console.log("Data fetched!");
      callback(); // Call the function after fetching
    }, 2000);
  }
  
  function processData() {
    console.log("Processing data...");
  }
  
  fetchData(processData);   


  //callback hell(nested deeply and very complex)
  function getUserData(userId, callback) {
    setTimeout(() => {
      console.log("User data fetched");
      callback({ id: userId, name: "Alice" });
    }, 2000);
  }
  
  function getPosts(user, callback) {
    setTimeout(() => {
      console.log("Posts fetched");
      callback(["Post 1", "Post 2"]);
    }, 2000);
  }
  
  getUserData(1, (user) => {
    getPosts(user, (posts) => {
      console.log(user, posts);
    });
  });
  