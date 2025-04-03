//hoisting variables declared with var
console.log(a); //  undefined (hoisted)
var a = 10;
console.log(a); // 10

//behind the scenes(how js interprets it)
var a;    // Declaration hoisted to the top
console.log(a); //  undefined
a = 10;   // Initialization happens later
console.log(a); // 10

//hoisting variables declared with let and const

//console.log(b); //  ReferenceError: Cannot access 'b' before initialization
//let b = 20;

//console.log(c); //  ReferenceError: Cannot access 'c' before initialization
//const c = 30;

//function declaration hoisting
hello(); // Works! Output: "Hello, World!"

function hello() {
    console.log("Hello, World!");
}

//behind the scenes(how js interprets it)\
function hello() {  // Function declaration is hoisted entirely
    console.log("Hello, World!");
}
hello();  // Works fine

//function expression is not hoisted like function declaration
//using var
console.log(sayHi); // ✅ undefined
//sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
    console.log("Hi!");
};
//var sayHi is hoisted as undefined, so calling sayHi() before assignment results in an error.

//using const or let
//console.log(greet); //  ReferenceError: Cannot access 'greet' before initialization
let greet = function () {
    console.log("Hello!");
}