//taking another function as an argumement
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
  }
  
  function sayBye() {
    console.log("Goodbye!");
  }
  
  greet("Alice", sayBye);
  
  //returnung a function from another function
  function multiplier(factor) {
    return function (num) {
      return num * factor;
    };
  }
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  console.log(double(5)); // 10
  console.log(triple(5)); // 15
  