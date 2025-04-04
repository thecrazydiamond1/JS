console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);

console.log("End");

// Output:  
// Start
// End
// Inside setTimeout
// After 2 seconds

//steps:
// "Start" is logged (synchronous, directly in call stack).
// setTimeout() is sent to the Web API, and a timer starts.
// "End" is logged (call stack is clear).
// After 2 seconds, the callback function (console.log("Inside setTimeout")) moves to the callback queue.
// The event loop moves it to the call stack when it's empty.
// "Inside setTimeout" is logged.




