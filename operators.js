// --- 1. Arithmetic Operators ---
let a = 10;
let b = 3;

console.log("Arithmetic Operators:");
console.log("Addition: ", a + b);       // 10 + 3 = 13
console.log("Subtraction: ", a - b);    // 10 - 3 = 7
console.log("Multiplication: ", a * b); // 10 * 3 = 30
console.log("Division: ", a / b);       // 10 / 3 = 3.33
console.log("Modulus: ", a % b);        // 10 % 3 = 1
console.log("Exponentiation: ", a ** b); // 10^3 = 1000

// --- 2. Logical Operators ---
console.log("\nLogical Operators:");
console.log("AND: ", a > 5 && b < 5);    // true
console.log("OR: ", a > 5 || b > 5);     // true
console.log("NOT: ", !(a > 5));          // false

// --- 3. Comparison Operators ---
console.log("\nComparison Operators:");
console.log("Equal: ", a == 10);        // true (value comparison)
console.log("Strict Equal: ", a === '10'); // false (value & type comparison)
console.log("Not Equal: ", a != 5);     // true
console.log("Strict Not Equal: ", a !== '10'); // true (value & type comparison)
console.log("Greater than: ", a > b);   // true
console.log("Less than: ", a < b);      // false

// --- 4. Assignment Operators ---
let x = 5;
let y = 2;

console.log("\nAssignment Operators:");
x += y; // x = x + y
console.log("x += y: ", x); // 7

x -= y; // x = x - y
console.log("x -= y: ", x); // 5

x *= y; // x = x * y
console.log("x *= y: ", x); // 10

x /= y; // x = x / y
console.log("x /= y: ", x); // 5

x %= y; // x = x % y
console.log("x %= y: ", x); // 1

// --- 5. Bitwise Operators ---
let p = 5;  // 0101 in binary
let q = 3;  // 0011 in binary

console.log("\nBitwise Operators:");
console.log("AND: ", p & q);    // 0101 & 0011 = 0001 => 1
console.log("OR: ", p | q);     // 0101 | 0011 = 0111 => 7
console.log("XOR: ", p ^ q);    // 0101 ^ 0011 = 0110 => 6
console.log("NOT: ", ~p);       // ~0101 = 1010 => -6 (in 2's complement)
console.log("Left Shift: ", p << 1);  // 0101 << 1 = 1010 => 10
console.log("Right Shift: ", p >> 1); // 0101 >> 1 = 0010 => 2

// --- 6. Ternary Operator ---
console.log("\nTernary Operator:");
let result = a > b ? "a is greater" : "b is greater or equal";
console.log(result); // a is greater

// --- 7. typeof Operator ---
console.log("\ntypeof Operator:");
console.log("typeof a: ", typeof a); // number
console.log("typeof 'hello': ", typeof 'hello'); // string
console.log("typeof true: ", typeof true); // boolean
console.log("typeof null: ", typeof null); // object (this is a JavaScript bug)

// --- 8. Nullish Coalescing Operator (??) ---
let undefinedValue = null;
let defaultValue = 100;

console.log("\nNullish Coalescing Operator (??):");
console.log("undefinedValue ?? defaultValue: ", undefinedValue ?? defaultValue); // 100 (nullish fallback)
undefinedValue = 0;
console.log("undefinedValue ?? defaultValue: ", undefinedValue ?? defaultValue); // 0 (not null or undefined)

// --- 9. Optional Chaining (?.) ---
let user = { name: "John", address: { street: "Main St", city: "Somewhere" } };

console.log("\nOptional Chaining (?.):");
console.log("user.address?.city: ", user.address?.city); // "Somewhere"
console.log("user.contact?.phone: ", user.contact?.phone); // undefined (no error, returns undefined)

// --- 10. Spread Operator (in Arrays and Objects) ---
console.log("\nSpread Operator:");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Spread in Arrays
let combinedArr = [...arr1, ...arr2];
console.log("Combined Arrays: ", combinedArr); // [1, 2, 3, 4, 5, 6]

// Spread in Objects
let userProfile = { ...user, age: 30 };
console.log("User Profile: ", userProfile); // { name: "John", address: { ... }, age: 30 }

// --- 11. Rest Operator (in Functions and Destructuring) ---

// Rest in Function Parameters
function addNumbers(a, b, ...rest) {
  console.log("First Number: ", a);
  console.log("Second Number: ", b);
  console.log("Other Numbers: ", rest);
}

addNumbers(1, 2, 3, 4, 5); // Rest will collect 3, 4, and 5

// Rest in Array Destructuring
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log("First: ", first);  // 1
console.log("Second: ", second); // 2
console.log("Remaining: ", remaining); // [3, 4, 5]

// Rest in Object Destructuring
const { name, ...otherInfo } = userProfile;
console.log("Name: ", name); // "John"
console.log("Other Info: ", otherInfo); // { address: { ... }, age: 30 }
