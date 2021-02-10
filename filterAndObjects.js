'use strict'

// let students = [];

// students.push({
//     'name' : 'Jimbo' ,
//     'passing' : false ,
// });
// students.push({
//     'name' : 'Jay' ,
//     'passing' : true ,
// });
// students.push({
//     'name' : 'Bob' ,
//     'passing' : true ,
// });
// students.push({
//     'name' : 'McClane' ,
//     'passing' : false ,
// });
// students.push({
//     'name' : 'Tool Man' ,
//     'passing' : true ,
// });

// write a function that takes in a student object
// and returns 1 of the following
// Hi X, you are currently passing the class!
// Hi X, you are currently failing! Get your head out of yor ass!

// let generateMessage = function(students) {
//     if (students['passing'] == true) {
//         return `Hi ${students['name']}, you are currently passing the class`;
//     }
//     if (students['passing'] == false) {
//         return `Hi ${students['name']}, please contact your professor immediately`;
//     }
// }

// let messages = students.map(generateMessage);
//     console.log(messages);

// use the filter method on the students array
// to filter down to just the failing students
// then use the forEach method on the failers to print their names

// let badStudents = students.filter(function(element, index) {
//     if (element['passing'] == false) {
//         return true;
//     }
// })

// badStudents.forEach(function(student, index) {
//     console.log(student['name']);
// })




// use the filter to filter down to the failing students
// use the map to generate a message for those failing
// use the forEach to console.log the messages

// let failingStudents = students.filter(function(students, index) {
//     if (students.passing == false) {
//         return true;
//     }   
//     else {
//         return false;
//     }
// })

// let message = failingStudents.map(function(students, index) {
//     return `Hi ${students.name}, please come see me.`;
// })

// let , aka text message, each generated message
// message.forEach(function(msg, index) {
//     console.log(msg);
// })





// SECOND EXAMPLE

let cars = [{
    'make' : 'Mazda',
    'cylinders' : 4,
    'model' : 'Protege',
    'color' : 'blue'
},{
    'make' : 'Volvo',
    'cylinders' : 8,
    'model' : 'Protege',
    'color' : 'white'
},{
    'make' : 'Audi',
    'cylinders' : 6,
    'model' : 'Q8',
    'color' : 'red'
},{
    'make' : 'BMW',
    'cylinders' : 4,
    'model' : '328i',
    'color' : 'black'
}]

cars.filter(function(cars) {
    if (cars.cylinders == 4) {
        return true;
    }
}).filter(function(cars) {
    if (cars.color == 'black') {
        return true;
    }
}).map(function(car) {
    return `The ${car.make} is a fantastic choice that meets your requirements.`;
}).forEach(function(description) {
    console.log(description);
})

let someCar = cars.filter(function(car) {
    if (car.cylinders == 8) {
        return true;
    }
})

console.log(someCar);