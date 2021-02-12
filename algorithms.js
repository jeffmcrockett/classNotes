// ALGORITHMS

// a set of instructions to accomplish a certain task
// in the context of a computer program for coding

// Algorithm for finding a word in the dictionary
// basic binary search in javascript

let binarySearch = function(array, target) {
    let L = 0;
    let R = array.length -1;
    while (L <= R) {
        let m = Math.floor((L + R) /2);
        if (array[m] < target) {
            L = m + 1;
        } else if (array[m] > target) {
            R = m - 1;
        } else {
            return m;
        }
    }
    return -1;
}
 



