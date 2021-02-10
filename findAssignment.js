let familyAges = [31, 29, 8, 2];

// created a function that will loop through the array and find the first value that meets the requirements
let myFind = function() {
    for (let i = 0; i < familyAges.length; i++) {
        if (familyAges[i] < 10) {
            return familyAges[i]
        }
    }
}

let answer = myFind();
    console.log(answer);

// created a find method that does the same thing as above, finds the first value that meets the requirements
let answer2 = familyAges.find(element => element < 10);
    console.log(answer2);