function first() {
console.log("First function");
second();
}

function second() {
console.log("Second function");
third();
}

function third() {
console.log("Third function");
}

first();
//output:
// First function
// Second function
// Third function


//steps:
// The call stack is empty at the start.
// first() is called → Execution context is pushed onto the stack.
// Inside first(), console.log("First function") executes.
// second() is called → A new execution context is pushed onto the stack.
// Inside second(), console.log("Second function") executes.
// third() is called → Another execution context is pushed onto the stack.
// Inside third(), console.log("Third function") executes.
// third() finishes and is popped off the stack.
// second() finishes and is popped off the stack.
// first() finishes and is popped off the stack.