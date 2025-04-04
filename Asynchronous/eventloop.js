console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  return Promise.resolve();
}).then(() => {
  console.log("Promise 2");
});

setTimeout(() => {
  console.log("setTimeout 2");
}, 0);

console.log("End");

//steps:
//console.log("Start") is added to the call stack.

//After it's executed, it is removed from the call stack.

//'Start' is logged.

//The first setTimeout is added to the task queue.

//The first Promise is added to the microtask queue.

//The second setTimeout is added to the task queue.

//console.log("End") is added to the call stack.

//After it's executed, it is removed from the call stack.

//"End" is logged.

//The event loop picks up the microtask queue first, so "Promise 1" is logged.

//The next promise in the chain is processed, so "Promise 2" is logged.

//Finally, the event loop picks up the task queue and processes the setTimeout callbacks in order: "setTimeout 1" and "setTimeout 2".