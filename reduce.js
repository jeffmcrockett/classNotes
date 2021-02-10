let numbers = [34, 23, 65, 2, 45, 3, 1, 1, 4, 6,7, 8 ,99, 34, 65, 53, 78, 89, 81, 12, 4, 56, 63];

let sum = numbers.reduce(function(previous, current, index) {
    return previous + current;
}, 0)

let max = numbers.reduce(function(previous, current, index) {
    if (current > previous) {
        return current;
    }
    else {
        return previous;
    }
})

console.log("Max = ", max);
console.log("Sum = ", sum);