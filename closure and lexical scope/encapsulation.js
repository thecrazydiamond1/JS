function createCounter() {
    let count = 0; // private variable
    
    // Inner function can access and modify the private variable
    return {
      increment: function() {
        count++;
        console.log(count);
      },
      decrement: function() {
        count--;
        console.log(count);
      },
      getCount: function() {
        console.log(count);
      }
    };
  }
  
  const counter = createCounter();
  counter.increment(); // 1
  counter.increment(); // 2
  counter.decrement(); // 1
  counter.getCount();  // 1
  
  // Trying to access the private variable directly would result in an error:
  console.log(counter.count); // undefined
