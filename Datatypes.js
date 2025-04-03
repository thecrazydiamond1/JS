//  Primitive Data Types
let str = "Hello, JavaScript!"; // String
let num = 42; // Number
let bool = true; // Boolean
let und; // Undefined
let nul = null; // Null
let bigIntNum = 1234567890123456789012345678901234567890n; // BigInt
let sym = Symbol("unique"); // Symbol

console.log("String:", str);
console.log("Number:", num);
console.log("Boolean:", bool);
console.log("Undefined:", und);
console.log("Null:", nul);
console.log("BigInt:", bigIntNum);
console.log("Symbol:", sym);

// Non-Primitive (Reference) Data Types
let obj = { name: "Alice", age: 25 }; // Object
let arr = ["Apple", "Banana", "Cherry"]; // Array 
let func = function() { // Function 
    return "Hello from a function!";
};

console.log("Object:", obj);
console.log("Array:", arr);
console.log("Function call:", func());

