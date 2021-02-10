//write a function that takes in the
//height and base of a triangle and
//returns the area

const triangleArea = function(base, height) {
    let area = (base * height) / 2; {
       if (area >= 0) {
           return area;
       }
       else return "undefined";
    }
}

const assert = require('assert');
describe('Testing Triangle Area', function() {

    it ('Testing Valid Positive Area', function(){
        let actual = triangleArea(1,1);
        let expected = .5;
        assert.equal(actual, expected);
    })
    it ('Testing Invalid Negative Area', function(){
        let actual = triangleArea(-1,1);
        let expected = "undefined";
        assert.equal(actual, expected);
    })
    it ('Testing Valid Zero Area', function(){
        let actual = triangleArea(0,4);
        let expected = 0;
        assert.equal(actual, expected);
    })
    it ('Testing Gigantic Area', function(){
        let actual = triangleArea(634,278);
        let expected = 88126;
        assert.equal(actual, expected);
    })
})

// triangleArea(5,8);
// triangleArea(-1,4);
// triangleArea(3,-2);