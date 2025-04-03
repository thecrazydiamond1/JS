//In normal function, "this" refers to person because greet is called as a method of person
const person = {
    name: "Alice",
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };
  
  person.greet(); // Output: "Hello, Alice"
  
  // In arrow function, "this" refers to the global object (or undefined in strict mode) because greet is not called as a method of person2
  const person2 = {
    name: "Alice",
    greet: () => {
      console.log("Hello, " + this.name);
    }
  };
  
  person2.greet(); // Output: "Hello, undefined"

  //A common use case where arrow function shine is when using them inside a method:
  const person3 = {
    name: "Alice",
    greet: function() {
      const sayHello = () => {
        console.log("Hello, " + this.name);
      };
      sayHello();
    }
  };
  
  person3.greet(); // Output: "Hello, Alice"
  

  //here is one liner arrow function:
  const greet = (name) => console.log("Hello, " + name + "!");
  greet("jeevi");

  //Function with default parameters
  function greeting(name = "User") {
    console.log("Hello, " + name + "!");
  }
  
  greeting(); // Hello, User!
  greeting("Alice"); // Hello, Alice!
  