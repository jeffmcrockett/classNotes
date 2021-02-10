'use strict'

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

let indexOfFirstVowel = function(word) {
    // first find the indexes of all vowels
    // compare vowels one at time, carrying the smaller indexed vowel
    let aIndex = word.indexOf("a");
    let eIndex = word.indexOf("e");
    let iIndex = word.indexOf("i");
    let oIndex = word.indexOf("o");
    let uIndex = word.indexOf("u");
    let vowelArray = [aIndex, eIndex, iIndex, oIndex, uIndex];
    let vowel = -1;
    for (let x = 0; x < vowelArray.length; x++) {
      vowel = smallestNonNegative(vowel, vowelArray[x])
    }
    // return the index position of the first vowel
    return vowel;
  }

const pigLatin = function(word) {
    // add yay to the end of a word that starts with a vowel
    if (indexOfFirstVowel(word) == 0) {
        return word+"yay";
    }
    // add ay to the end of the word that has no vowels
    if (indexOfFirstVowel(word) == -1) {
        return (word+"ay");
    }
    // remove the consonants before the first vowel
    // of a word that does not start with a vowel and add
    // those consonants to the end of the word + ay
    if (indexOfFirstVowel(word) > 0) {
        let position = indexOfFirstVowel(word);
        // word with one consonant before the first vowel
        if (position == 1) {
            let charMove = word.charAt(0);
            let newStr = word.slice(1);
            return newStr+charMove+"ay";
        }
        // word with two consonants before the first vowel
        if (position == 2) {
            let charMove = (word.charAt(0))+(word.charAt(1));
            let newStr = word.slice(2);
            return newStr+charMove+"ay";
        }
        // word with three consonants before the first vowel
        if (position == 3) {
            let charMove = (word.charAt(0))+(word.charAt(1))+(word.charAt(2));
            let newStr = word.slice(3);
            return newStr+charMove+"ay";
        }
        // word with four consonants before the first vowel
        if (position == 4) {
            let charMove = (word.charAt(0))+(word.charAt(1))+(word.charAt(2))+(word.charAt(3));
            let newStr = word.slice(4);
            return newStr+charMove+"ay";
        }
    }
  }


let translateNewWord = function() {
    let inputBox = document.getElementById('input');
      // spent two days with a problem
      // realized that I was grabbing the wrong id on line 77 above....
    let input = inputBox.value;
    let theAnswer = pigLatin(input);
    let span = document.getElementById('translatedWord')
    span.innerHTML = theAnswer;
}

