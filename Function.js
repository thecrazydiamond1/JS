// Function Declaration Example (Hoisted)
hello(); // Output: "Hello, this is hoisted function!"
function hello() {
  console.log("Hello, this is hoisted function!");
}

// Function Expression Example (Not Hoisted)
try {
  helloExpression(); // Error: Cannot call helloExpression before it's defined
} catch (e) {
  console.log(e.message); // Output: helloExpression is not a function
}

const helloExpression = function() {
  console.log("Hello from function expression!");
};
