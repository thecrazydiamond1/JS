function outer() {
    const outerVar = "I am from the outer function!";
    
    function inner() {
      console.log(outerVar); // Accesses outerVar from the outer function
    }
    
    return inner; // Return the inner function, which still has access to outerVar
  }
  
  const closureFunction = outer(); // outer() is called, and inner() is returned
  closureFunction(); // Logs "I am from the outer function!"
  
//steps:
// We define a function outer().
//Inside outer(), we declare a variable outerVar with the value "I am from the outer function!".
//We define another function inner() inside outer(), which simply logs outerVar.
//outer() returns inner() instead of calling it.
//outer() is called, meaning:
//outerVar is created (outerVar = "I am from the outer function!").
//inner() is created but not executed yet.
//inner() is returned from outer() and stored in closureFunction.
//At this point, outer() has finished executing, so normally, everything inside it (like outerVar) should be gone. But because inner() is still holding a reference to outerVar, it does not get removed from memory.
// closureFunction is actually inner(), so when we call it:
// It still remembers outerVar because of closure.
// Even though outer() has finished executing, inner() still has access to outerVar.