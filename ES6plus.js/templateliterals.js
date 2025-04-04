//template literals
const username = "Ali";
console.log(`Hello, ${username}!`);

//this is how we can use template literals to create multi-line strings 
const multiLineString = `This is a string
that spans multiple lines.`;
console.log(multiLineString);

//this is how we can use template literals to create strings with expressions
const a = 5;
const b = 10;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // The sum of 5 and 10 is 15.

//this is how we can use template literals to create strings with variables
const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
console.log(fullName); // John Doe

//this is how we can use template literals to create strings with functions
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice")); // Hello, Alice!

//this is how we can use template literals to create strings with objects
const person = { name: "Alice", age: 30 };
const personString = `Name: ${person.name}, Age: ${person.age}`;
console.log(personString); // Name: Alice, Age: 30
//this is how we can use template literals to create strings with arrays
const fruits = ["apple", "banana", "cherry"];
const fruitsString = `Fruits: ${fruits.join(", ")}`;
console.log(fruitsString); // Fruits: apple, banana, cherry

