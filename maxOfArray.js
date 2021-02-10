'use strict'

// this function takes in an array of numbers and returns
// the largest number.
// If the array is empty, return null.

// let numberArray = [];

// let largestNumber = function(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     }
//     if (num2 > num1) {
//         return num1;
//     }
// }

// let largestNum = function(numberArray) {
//     let biggest = 0;
//     for (let i = 0; i < numberArray.length; i++) {
//         biggest = largestNumber(biggest, numberArray[i]);
//     }
//     return biggest;
// }

// let dog = largestNum([1,45,34,,3,64,63,463,2,4,3256,43,63,457,345,63245,9]);
//     console.log(dog);


// let largest = function(numbers) {
//     if (!numbers) {
//         return null;
//     }
//     if (numbers.length == 0) {
//         return null;
//     }
//     let piecePaper = numbers[0];
//     for (let index = 1; index < numbers.length; index++) {
//         let nextNumber = numbers[index];
//         if (nextNumber > piecePaper) {
//             piecePaper = nextNumber;
//         }
//         else {

//         }
//     }
//     return piecePaper;
// }



let fruit = [{
    name: 'apple', color: ["red", "green", "yellow"], 
    properties: ["juicy",'tart', 'sandy','crunchy']
},
{
 name: "banana", color: ["yellow","green", "black"], properties: ["squishy"]   
},{
    name: "orange", color: ["orange"], properties: ["sour"]
},{
    name: "grape", color: ["green", "red", "black", "indigo"],
     proprties:['seedless','juicy', 'boozy'] 
}]


for (let index = 0; index < fruit.length; index++) {
    let currentFruit = fruit[index];
    let numColors = currentFruit.color.length;
    let name = currentFruit.name;
    let properties = currentFruit.properties;

    let sentence = `The ${name} is an awesome fruit, that can be found in ${numColors}`;
    if (numColors > 1) {
        sentence += ' colors. ';
    } else {
        sentence += ' color. ';
    }

    let propertiesString;
    if (properties.length > 1) {
        let lastProperty = properties.pop();
        propertiesString = properties.join(", ");
        propertiesString = propertiesString+" and "+lastProperty;
    } else {
        propertiesString = "just "+properties[0];
    }
    sentence += `Some of the unique properties of ${name}s is that they are ${propertiesString}.`;

    console.log(sentence);
}