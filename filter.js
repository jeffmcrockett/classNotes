'use strict'

let friends = ['John', 'Betty', 'Marge', 'Mark', 'James', 'Mary', 'Adam', 'Bob']

// write a function that takes in a string
// and returns true if the first letter is M
// and returns false if the first letter is not M

let startsWithM = function(word) {
    if (word[0] == 'M') {
        return true;
    }
    else {
        return false;
    }
}

let specialFriends = friends.filter(startsWithM);
    console.log(specialFriends);

let numbers = [2, 3, 6, 2, 4, 6, 9, 3];

let odd = numbers.filter(function(element, index) {
    if (element%2 == 0) {
        return false;
    }
    else {
        return true;
    }
})

odd.forEach(function(element, index) {
    console.log(element, "is an odd number!");
})