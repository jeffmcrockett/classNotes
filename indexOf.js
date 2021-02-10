//if num 1 is negative, return num 2
//if num 2 is negative, return num 1
//otherwise return the smaller of the two

let smallestNonNegative = function(num1, num2) {
    if (num1 < 0) {
        return num2;
    }
    if (num2 < 0) {
        return num1;
    }
    if (num1 < num2) {
        return num1;
    }   else {
        return num2;
    }
}

//write a function that will return the position of the first vowel
//using smallestNonNegative() and indexOf()


//This function will return the position of the first vowel
//of the word that is passed in


// let indexOfFirstVowel = function(word) {
//     let aIndex = word.indexOf('a');
//     let eIndex = word.indexOf('e');
//     let iIndex = word.indexOf('i');
//     let oIndex = word.indexOf('o');
//     let uIndex = word.indexOf('u');
//     let vowel = -1;
//     vowel = smallestNonNegative(vowel, aIndex);
//     vowel = smallestNonNegative(vowel, eIndex);
//     vowel = smallestNonNegative(vowel, iIndex);
//     vowel = smallestNonNegative(vowel, oIndex);
//     vowel = smallestNonNegative(vowel, uIndex);
//     console.log(vowel);
// }


let indexOfFirstVowel = function(word) {
    // first fine the indexes of all vowels
    // compare vowels one at time, carrying the smaller indexed vowel
    let aIndex = word.indexOf("a")
    let eIndex = word.indexOf("e")
    let iIndex = word.indexOf("i")
    let oIndex = word.indexOf("o")
    let uIndex = word.indexOf("u")
  
    let vowelArray = [aIndex, eIndex, iIndex, oIndex, uIndex]
  
    vowel = -1
  
    for (let x = 0; x < vowelArray.length; x++) {
      vowel = smallestNonNegative(vowel, vowelArray[x])
    }
  
    console.log(vowel);
  }



let word1 = "bobcat";
let word2 = "meow";
let word3 = "elephant";
let word4 = "TskTsk";

indexOfFirstVowel(word1);  //1
indexOfFirstVowel(word2);  //1
indexOfFirstVowel(word3);  //0
indexOfFirstVowel(word4);  //-1
