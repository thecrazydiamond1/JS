//reduce() method
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 10

//filter() method
const ages = [15, 20, 30, 17, 25];

const adults = ages.filter(age => age >= 18);

console.log(adults); // [20, 30, 25]

//map() method
const squared = numbers.map(num => num * num);

console.log(squared); // [1, 4, 9, 16]
