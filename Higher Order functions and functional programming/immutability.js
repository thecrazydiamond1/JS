//mutable
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4] (original array modified)
//here the main array is modified and the new value is added to it

//immutable
let arrr = [1, 2, 3];
let newArr = [...arr, 4]; // Spread operator creates a new array

console.log(arrr);    // [1, 2, 3] (unchanged)
console.log(newArr); // [1, 2, 3, 4] (new array)
//here spread is used to create a new array and the original array is not modified

//immutability can also be achieved by map() method 

const numbers = [1, 2, 3, 4];

const squared = numbers.map(num => num * num);

console.log(squared); // [1, 4, 9, 16]
console.log(numbers); // [1, 2, 3, 4] (original array unchanged)