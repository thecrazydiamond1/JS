// Declaring variables
var x = 10;
let y = 20;
const z = 30;

console.log("Initial values:");
console.log("var x:", x);
console.log("let y:", y);
console.log("const z:", z);

// Reassigning values
x = 15; // Works
y = 25; // Works
// z = 35; // Error: Assignment to constant variable

console.log("\nAfter reassignment:");
console.log("var x:", x);
console.log("let y:", y);

// Redeclaring variables
var x = 100; // Works (var allows redeclaration)
// let y = 200; // Error: Identifier 'y' has already been declared
// const z = 300; // Error: Identifier 'z' has already been declared

console.log("\nAfter redeclaration:");
console.log("var x:", x);

// Function to check scope
function scopeTest() {
    var a = "I am var inside function";
    let b = "I am let inside function";
    const c = "I am const inside function";

    console.log("\nInside function:");
    console.log(a);
    console.log(b);
    console.log(c);
}

scopeTest();

// Trying to access variables outside the function
console.log("\nOutside function:");
try {
    console.log(a); // Error: a is not defined (function-scoped)
} catch (e) {
    console.log("Error accessing 'a':", e.message);
}

try {
    console.log(b); // Error: b is not defined (block-scoped)
} catch (e) {
    console.log("Error accessing 'b':", e.message);
}

try {
    console.log(c); // Error: c is not defined (block-scoped)
} catch (e) {
    console.log("Error accessing 'c':", e.message);
}
