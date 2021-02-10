'use strict'

// let friends = ['john', 'jenny', 'jack', 'jill'];

// friends.forEach(function(element, index){
//     console.log(element);
// })

// this function prints to the console whatever is passed into it
// let print = function(element, index) {
//     console.log(element, "is in the position", index);
// }

// this is how I would print all elements in the array NOT using forEach
// for (let i=0; i<friends.length; i++) {
//     console.log(friends[i]);
// }

// any function that you pass in to the forEach must meet certain 'contract' requirements
// 1. the first input passed in is the element of the array
// 2. the second input passed in is the index of the element in the array
// 3. the third input passed in is the array itself
// friends.forEach(print);


// let students = ['mike', 'matt', 'mary', 'marge'];

// Hi x, thanks for being in my class

// students.forEach(function(element, index) {
//     console.log(`Hi ${element}, thanks for being in my class.`);
// })

let numbers = [4, 2, 6, 1, , 4, 7, 9, 1, 2, 6, 7];

// use the for each function to print every number
// chnage the for each function to only print the odd numbers

numbers.forEach(function(element, index) {
    console.log(element);
})

numbers.forEach(function(element, index) {
    if (element%2 == 1) {
        console.log(element);
    }
})


// MAP
// map is used to convert every element from whatever
// it is to something else

