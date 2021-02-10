'use strict'

// how do I execute callbacks?
// thing of them as just one input for a function is another function instead of an object or variable


/**
 * this function will print a number, update it, and print it again
 * @param {*} callback the function that defines how the number should be updated, takes in the original number
 * @param {*} number the number to print and is passed to the callback to get updated
 */
// let printAndUpdate = function(callback, number) {
//     console.log("The number before the update is", number);
//     number = callback(number);
//     console.log("The number after the update is", number);
// }

// printAndUpdate(function(original) {
//     return original * 3;
// }, 4)


// SECOND EXAMPLE .....
/**
 * 
 * @param {array} array the array to loop through
 * @param {*} callback to execute on every element in the array
 */
let myForEach = function(fruit, callback) {
    for (let i = 0; i < fruit.length; i++) {
        callback(fruit[i], i);
    }
}


let fruit = ['apple', 'banana', 'clementine'];

myForEach(fruit, function(element) {
    console.log(element)
});