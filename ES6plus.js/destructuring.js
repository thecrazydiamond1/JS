//object destructing
const person = { name: "Aisha", age: 25 };
const { name, age } = person;

console.log(name); // Aisha
console.log(age);  // 25

//array destructing
const numbers = [1, 2, 3];
const [first, second] = numbers;

console.log(first);  // 1
console.log(second); // 2

//nested destructing
const nestedArray = [1, [2, 3]];
const [one, [two, three]] = nestedArray;
console.log(one);   // 1
console.log(two);   // 2
console.log(three); // 3
