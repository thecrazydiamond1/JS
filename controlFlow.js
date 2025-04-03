// Example: Control Flow in JavaScript

// 1. if-else, else if
function checkNumber(num) {
    if (num > 0) {
        console.log("The number is positive.");
    } else if (num < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

checkNumber(5);  // Output: The number is positive.
checkNumber(-3); // Output: The number is negative.
checkNumber(0);  // Output: The number is zero.


// 2. switch statement
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number.");
    }
}

getDayName(3); // Output: Wednesday


// 3. for loop
console.log("Numbers from 1 to 5 using for loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 4. while loop
console.log("Numbers from 1 to 5 using while loop:");
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// 5. do-while loop
console.log("Numbers from 1 to 5 using do-while loop:");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);


// 6. break statement in loop
console.log("Loop with break (stops at 3):");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Exit loop when i is 3
    }
    console.log(i);
}

// 7. continue statement in loop
console.log("Loop with continue (skips 3):");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip 3 and continue the loop
    }
    console.log(i);
}
// break and continue

for (let i = 0; i < 5; i++) {
    if (i === 3) {
      continue; // skips printing 3
    }
    if (i === 4) {
      break; // stops the loop
    }
    console.log(i);
  }
