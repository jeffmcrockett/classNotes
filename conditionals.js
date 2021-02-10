// console.log("hello");

// let name = "Jeff";
// let age = 32;
// let favoriteNumber = 27;
// let isAlive = true;
// let address = {
//     street: "192 World of Tennis",
//     city: "Austin",
//     state: "Texas",
//     zip: "78738"
// }

// let favoriteFruits = ['mango', "peach", "strawberry"];

// let x = 12;
// let y = 35;

// let z = x + y;
// console.log(z);

// let w = "45";
// let sum2 = x + w;
// console.log(sum2);

// let f1 = 'Banana';
// let f2 = 'Orange';
// let salad = f1+f2;
// console.log(salad);




// let sentence = "Hi, my name is "+ name + "! You asked if I was alive. It turns out the answer is "+isAlive+".";
// console.log(sentence);

// let introduction = `Hi, my name is ${name}!`;
// console.log(introduction);

// let happyBirthday = function(name2, age2) {
//     let message = "Happy Birthday "+name2+"! Don't let the fact that you're "+age2+" years old get you down!";
//     return message;
// }

// let answer1 = happyBirthday("Jess", 30);
// console.log(answer1);






// `use strict`

// let tall = true;
// let handsome = true;

// if (tall || handsome) {     //using predicate, this will always just return answer to the first one, if false, this code will not run
//     console.log("Sure thing");
// }   else if (tall && handsome) {
//     console.log("Yes please");
// }   else {
//     console.log("I am not sure");
// }




// let grade = 104 ;

// if (grade >= 90) {
//     console.log("You made an A");
// }   else if (grade >= 80) {
//     console.log("You made a B");
// }   else if (grade >= 70) {
//     console.log("You made a C");
// }   else if (grade >= 100) {
//     console.log("Super Dooper!!!") //it will never get here because the greater than 90 has already been met
// }   else {
//     console.log("You obviously didn't study for this test!");
// }






// if (tall || handsome) {
//     console.log("Yep, they're either tall or handsome, possibly both");
// }
// if (tall && handsome) {
//     console.log("Yep, they're tall and handsome");
// }

// /**
// * Create an input that takes in
// * 2 inputs
// * @param {boolean} handsome
// * @param {boolean} tall
// * @returns some exclaimation based on the different criteria for handsome and tall
// */

// const goodLooking = function(tall, handsome) {
//     if (handsome && tall) {
//     return "You hit the genetic jackpot!";
// }   else if (handsome || tall) {
//     return "It could be worse!";
// }   else {
//     return "Man tough luck!";
// }}

// let attempt1 = goodLooking(true, true);
//     console.log(attempt1);




    
const stimulusCheck = function(income, married, numDep) {
    if (!married && income <= 75000) {
        return 600 + (numDep * 500);
    }

    if (married && income <= 150000) {
        return 1200 + (numDep * 500);
    }

    return 0;
}

// let myCheck = stimulusCheck(130000, true, 1);
// console.log(myCheck);

// const trimTest = function() {   
//     let solene = "    My cute daUGhter     with whItespace      ".replace(/\s+/g, '').toLowerCase();
//     console.log(solene);
// }
// trimTest();



