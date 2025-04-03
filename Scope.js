//global vs local scope
let globalVar = "I am global";

function test() {
  let localVar = "I am local";
  console.log(globalVar); // accessible
  console.log(localVar); // accessible
}

console.log(globalVar); // accessible
//console.log(localVar); // Error: localVar is not defined
test(); // Call the function to see local variable access

// function vs block scope
function testFunctionScope() {
    var x = 10; // Function-scoped
    if (true) {
        var y = 20; // Still function-scoped (not block-scoped)
    }
    console.log(x); // 10
    console.log(y); // 20 (accessible even outside the block)
}

testFunctionScope();

// console.log(x); // Error: x is not defined (not accessible outside function)
// console.log(y); // Error: y is not defined (not accessible outside function)

function testBlockScope() {
    if (true) {
        let a = 100;  // Block-scoped
        const b = 200; // Block-scoped
        console.log(a); //  100
        console.log(b); //  200
    }
    // console.log(a); //  Error: a is not defined (outside block)
    // console.log(b); //  Error: b is not defined (outside block)
}

testBlockScope();
