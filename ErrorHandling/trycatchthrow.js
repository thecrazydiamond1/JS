//try catch 
try {
    const result = someNonExistentFunction();
  } catch (error) {
    console.log("An error occurred:", error.message);// Output: An error occurred: someNonExistentFunction is not defined
  } finally {
    console.log("This will always run, whether or not an error occurred.");
  }
//The code in the try block is executed. If an error occurs, the code in the catch block is executed. The finally (optional) block always runs, regardless of whether an error occurred.

//throw
function validateAge(age) {
    if (age < 18) {
      throw new Error("Age must be 18 or older");
    }
    console.log("Age is valid");
  }
  
  try {
    validateAge(16);
  } catch (error) {
    console.log("Caught an error:", error.message);
  }
  //output: Caught an error: Age must be 18 or older
  //Since the validateAge function threw an error, the code inside the try block stops executing, and control is transferred to the catch block.

  //another example using try/catch and throw together
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  
  try {
    const result = divide(10, 0);
    console.log(result);
  } catch (error) {
    console.log("Error:", error.message);
  }