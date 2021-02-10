// Arrays
// they use square brackets
// they hold different objects or values


// let fruit = ['apple', 'banana', 'cucumber', 'orange'];

// console.log(fruit[0]);

// fruit[0] = 'strawberry';

// console.log(fruit[0]);


// write a function
// that takes in an array of fruit of size 3
// returns true if all the fruit inside the array are the same



const same3 = function(fruit) {
    if ((fruit[0] == fruit[1]) && (fruit[0] == fruit[2]) && fruit[0] != '') {
        return true;
    } else return false;
}

if (typeof describe == 'function') {
    const assert = require('assert');
    describe('array size 3', function () {
        it("all the same", function () {
            let actual = same3(['apple', 'apple', 'apple']);
            let expected = true;
            assert.equal(actual, expected);
        })

        it("2 the same", function () {
            let actual = same3(['apple', 'banana', 'apple']);
            let expected = false;
            assert.equal(actual, expected);
        })

        it("all different ", function () {
            let actual = same3(['kiwi', 'banana', 'apple']);
            let expected = false;
            assert.equal(actual, expected);
        })
    })

    describe('array bigger than 3', function () {
        it("first 3 the same", function () {
            let actual = same3(['apple', 'apple', 'apple', 'banana']);
            let expected = true;
            assert.equal(actual, expected);
        })

        it("first 3 different the same", function () {
            let actual = same3(['apple', 'banana', 'kiwiw', 'mellon']);
            let expected = false;
            assert.equal(actual, expected);
        })

    })

    describe('array less than 3', function () {
        it("size 2 ", function () {
            let actual = same3(['apple', 'banana']);
            let expected = false;
            assert.equal(actual, expected);
        })

        it("first 2 the same", function () {
            let actual = same3(['apple', 'apple']);
            let expected = false;
            assert.equal(actual, expected);
        })

    })
}



// want a function that will put a fruit in the first position

let addFruit = function(position, toAdd, theFruitArray) {
    theFruitArray[position] = toAdd;
}

let basket = [];
addFruit(0, 'apple', basket);
console.log(basket);





