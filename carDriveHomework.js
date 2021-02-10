const assert = require('assert');


class Car {
    mpg;
    tankCapacity;
    fuelLevel = 0;
    id;
    odometer = 0;

    // this is the constructor
    // this method gets called, when the new instance is constructed
    constructor(inputMpg, inputTankCapacity) {
    
        // generate a random number between 0 and 1 then multiply it by 10,000
        // to shift the decimal four places then round down to a whole number
        let randomNumber = Math.floor(Math.random() * 10000)
          this.id = randomNumber;

          this.tankCapacity = inputTankCapacity;
          this.mpg = inputMpg;
    }

    // drive, affects fuel level and odometer
    // fuelUp, affects fuel level
    // write a method that will simulate fueling up
    addFuel(gallons) {
        if ((this.fuelLevel + gallons) <= this.tankCapacity) {
            this.fuelLevel = this.fuelLevel + gallons;
        }
        else this.fuelLevel = this.tankCapacity
    }
    milesToEmpty() {
        return this.mpg * this.fuelLevel;
    }
    drive(distance) {
        // first instance will see if we have enough gas to make the trip
        if (this.fuelLevel - (distance/this.mpg) < 0) {
            console.log(`We don't have enough gas to drive ${distance} miles. Please add fuel before attempting this adventure. The furthest this car can drive before running out of fuel is 374 miles.`)
        }
        // drive the car for a certain number of miles
        // update fuelLevel and odometer accordingly
        else {
            this.odometer = this.odometer + distance;
            let fuelUsed = distance/this.mpg;
            this.fuelLevel = this.fuelLevel - fuelUsed;
        }
    }
}


let pinto = new Car();
pinto.mpg = 26;
pinto.id = 1;
pinto.tankCapacity = 12;
console.log(pinto);

let audi = new Car();
audi.mpg = 22;
audi.id = 2;
audi.tankCapacity = 17;
console.log(audi);



console.log("After constructor, the fuel level is", audi.fuelLevel);
audi.addFuel(23);
console.log("After adding fuel, the fuel level is", audi.fuelLevel);
console.log(`The Audi will run out of gas in ${audi.milesToEmpty()} miles.`);
audi.drive(500);
audi.drive(36);
console.log(`The Audi's odometer is now at ${audi.odometer} miles.`);
audi.drive(59);
console.log(`After a second trip, the odometer is now at ${audi.odometer} miles.`);




// remember that we are missing logic
// we cannot add gallons that exceed the tankCapacity
// we cannot continue driving after fuelLevel hits 0
// we cannot have two ids that are identical (though here it doesn't matter if we do)