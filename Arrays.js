//this is how we declare an array in JavaScript
// Arrays are used to store multiple values in a single variable
// Arrays are a special type of object in JavaScript
const fruits = ["apple", "banana", "cherry"];
// This is how we can access the elements of an array
console.log(fruits[0]); // apple
//this is how we can add a new element to an array
fruits[3] = "grape"; // adds "grape" at index 3
fruits.push("orange"); // adds "orange" to the end
fruits.unshift("kiwi"); // adds "kiwi" to the beginning
//this is how we can remove an element from an array
fruits.pop(); // removes the last element ("orange")
fruits.shift(); // removes the first element ("apple")
//this is how we can find the length of an array
console.log(fruits.length); // 4 (after adding and removing elements)

//ths is how we use map function to iterate over an array
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

//this is how we use filter function to filter an array
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

//this is how we use reduce function to reduce an array to a single value
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);  
console.log(sum); // 15 (1 + 2 + 3 + 4 + 5)

//this is how we use forEach function to iterate over an array
fruits.forEach(fruit => console.log(fruit)); // apple, banana, cherry, grape

//this is how we use slice function to slice an array
const slicedFruits = fruits.slice(1, 3); // slices from index 1 to 2 (not including index 3)
console.log(slicedFruits); // ["banana", "cherry"]

//printing whole array
console.log(fruits); // ["apple", "banana", "cherry", "orange"]
