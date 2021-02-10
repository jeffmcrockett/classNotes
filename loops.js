// Loops
// Loop through code for however many times you specify, or
// until a certain condition is met
// you can run them on objects and arrays
// for of and for in loops, while loops, do-while, for loops


// 1. a statement that is run before the loop starts, executed only once
// 2. Loop asking, "Should I go again?", true/false statement, if resolves true, execute iteration
// 3. the code that should be executed for every iteration
// 4. what to do to prepare for the next iteration

// for(1; 2; 4) {
//     3;
// }

// let us print number 1-5
// 1. set a variable to hold the number 1
// 2. ask if the variable is less than or equal to 5
// 3. print the variable
// 4. increment the variable by 1

// for (let num = 1; num <= 5; num = num + 1) {
//     console.log(num);
// }

// for loop for all even numbers between 1-100

// for (let num = 2; num <= 100; num = num +2) {
//     console.log(num);
// }

// for (let num = 100; num >= 2; num = num -2) {
//     console.log(num);
// }

// better version

// for (let i = 1; i <= 100; i++) {
//     for (i%2 == 0) {
//         console.log(i);
//     }
// }

// pring fizz if the num is divisible by 3
// print buzz if the num is divisible by 5
// print fizzbuzz if the num is divisible by both

// for (let i = 1; i <= 45; i++) {
//     if (i%15 == 0) {
//         console.log("fizzbuzz");
//     }
//     else if (i%3 == 0) {
//         console.log("fizz");
//     }
//     else if (i%5 == 0) {
//         console.log("buzz");
//     }
//     else {
//         console.log(i);
//     }   
// }






// while loops
// keep executing this loop as long as the condition remains true


// while (not done) {
//     do work;
//     check to see if done;
// }


// let number = 0;

// console.log("Before the loop");
// while(number < 4) {
//     console.log(number);
//     number = number++;
// }
// console.log("After the loop");


// let num = 10;
// while (num >0) {
//     console.log(num);
//     num = num -1;
// }



let fruit = [
    'apple',
    'banana',
    'cucumber',
    'dragon fruit',
    'elderberry',
    'fig',
    'grapefruit',
    'honeysuckle'
]

console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);

for (i = 0; i < fruit.length; i++) {
    console.log(i);
    console.log(fruit[i]);
}