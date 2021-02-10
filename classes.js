
'use strict'

// classes
// you can use them as templates
// it is an easier way to create multiple objects with the same properties
// ther is build in METHODS and you can also create METHODS of your own

// the concept of a CONSTRUCTOR

// difference between METHODS and FUNCTIONS
// when you call the class the parameters are the values in the class (not really!!)



// class Car {
//     mpg;
//     tankCapacity;
//     fuelLevel = 0;
//     id;
//     odometer = 0;

//     // this is the constructor
//     // this method gets called, when the new instance is constructed
//     constructor(inputMpg, inputTankCapacity) {
    
//         // generate a random number between 0 and 1 then multiply it by 10,000
//         // to shift the decimal four places then round down to a whole number
//         let randomNumber = Math.floor(Math.random() * 10000)
//           this.id = randomNumber;

//           this.tankCapacity = inputTankCapacity;
//           this.mpg = inputMpg;
//     }

//     // drive, affects fuel level and odometer
//     // fuelUp, affects fuel level
//     // write a method that will simulate fueling up
//     addFuel(gallons) {
//         this.fuelLevel = this.fuelLevel + gallons;
//     }
//     milesToEmpty() {
//         return this.mpg * this.fuelLevel;
//     }
//     drive(distance) {
//         // drive the car for a certain number of miles
//         // update fuelLevel and odometer accordingly
//         this.odometer = this.odometer + distance;
//         let fuelUsed = distance/this.mpg;
//         this.fuelLevel = this.fuelLevel - fuelUsed;
//     }
// }


// let pinto = new Car();
// pinto.mpg = 26;
// pinto.id = 1;
// pinto.tankCapacity = 12;
// console.log(pinto);

// let audi = new Car();
// audi.mpg = 22;
// audi.id = 2;
// audi.tankCapacity = 17;
// console.log(audi);



// console.log("After constructor", audi.fuelLevel);
// audi.addFuel(3);
// console.log("After adding fuel", audi.fuelLevel);
// console.log(`The Audi will run out of gas in ${audi.milesToEmpty()} miles.`);



// remember that we are missing logic
// we cannot add gallons that exceed the tankCapacity
// we cannot continue driving after fuelLevel hits 0
// we cannot have two ids that are identical (though here it doesn't matter if we do)




// NEXT EXAMPLE ....................



// we want to simulate a square


// class Square {

//     side;
//     perimeter;
//     area;

//     constructor(squareSide) {
//         this.side = squareSide;
//         this.perimeter = this.side * 4 + " units";
//         this.area = this.side * this.side + " square units";
//     }
// }

// let s1 = new Square(4);
// console.log(s1);
// let s2 = new Square(2);
// console.log(s2);


// class rectangle {

//     length;
//     width;
//     area;
//     perimeter;
//     isSquare;

//     constructor(inputLength, inputWidth) {
//         this.length = inputLength;
//         this.width = inputWidth;
//     }

//     area () {
//         this.area = this.width * this.length;
//         return this.area;
//     }

//     perimeter() {
//         this.perimeter = ((this.width * 2) + (this.length * 2));
//         return this.perimeter;
//     }

//     isSquare() {
//         if (length == width) {
//             this.isSquare = true;
//             return true;
//         }   else this.isSquare = false;
//             return false;
//     }
// }

// let r1 = new rectangle(4,2);
// console.log(r1.perimeter());
// console.log(r1.area());
// console.log(r1.isSquare());
// console.log(r1);











// SECOND DAY OF CLASSES   ...........................................

/**
 * class that represents a student in out school
 * Every student has a name, an id, a dob, and a collection of grades
 * 
 * when a student instance is created
 * set the name from the input, and the dob, and generate a random id number
 * and instantiate the collection of grades as an empty array
 * 
 * methods:
 * getAvg() should return the average grade of the student
 * getMin() should return the minimum grade of the student
 * isPassing() returns true is the student is passing and false for failing, passing avg 70+
 * addGrade () add the passed in grade to the student's gradebook.
 */

//  class student {
//      name;
//      id;
//      dob;
//      grades;

//     constructor(name, dob) {
//         this.name = name;
//         this.dob = dob;
//         let randomNumber = Math.floor(Math.random() * 10000);
//         this.id = randomNumber;
//         this.grades = [];
//     }

//     getMin() {
//         let minGrade = null;
//         for (let i=0; i < this.grades.length; i++) {
//             if (this.grades[i] < minGrade || i == 0) {
//                 minGrade = this.grades[i];
//             }
//         }
//         return minGrade;
//     }

//     getAvg() {
//         let sum = this.grades.reduce(function(a,b){
//             return a+b
//         }, 0)
//         let avg = sum/this.grades.length;
//         return avg;
//     }

//     isPassing() {
//         if (this.getAvg() >= 70) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
 
//     addGrade(grade) {
//         this.grades.push(grade);
//     }
//  }


//  let Sam = new student("Sam", `April 10`);
//  console.log(`Name and dob after constructor is ${Sam.name} and ${Sam.dob}`);
//  Sam.addGrade(85);
//  Sam.addGrade(99);
//  Sam.addGrade(54);
//  console.log(Sam);
 
//  console.log(Sam.getMin());
//  console.log(Sam.getAvg());
//  console.log("Is Sam passing?", Sam.isPassing());








 // ASSIGNMENT FOR THIS WEEK ........................................

 /**
  * MISSION TO MARS
  * INSTRUCTIONS
  * 
  * 2 classes...
  * 1. crew member class
  *  title (Captain, Officer, Pilot)
  *  name
  *  enterVehicle(vehicle) add this crew member to the vehicle passed in
  *  extra..... assignedVehicle attribute;
  * 
  * 2. vehicle class
  *  type (Enterprise, Voyager, Narada)
  *  id
  *  assigned crew - array of crew members assigned to the vehicle
  *  crew on board - array of crew members on board
  * 
  * Methods
  * isReady() this should return true if vehicle is ready to go
  *     ready to go if there is the correct crew on board
  * 
  * extra..... a crewmember cannot be in two places at once....
  * 
  */




  // simple class that represents a person


  class person {
      name;
      job;

      constructor()
  }