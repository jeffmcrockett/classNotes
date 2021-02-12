let jobs = {
    "Captain" : "Enterprise",
    "Pilot" : "Voyager",
    "Officer" : "Narada"
}

class crewMember {
    title;
    name;
    assignedVehicle;
    currentVehicle;

    constructor(name, title) {
        this.name = name;
        this.title = title;
        this.assignedVehicle = [];
        this.currentVehicle = [];
        // choosing to assign positions to respective ships with the constructor
        // ! It would be better to assign crew to a ship 'type' instead of a specific spaceship if this code was meant to grow
        // pushing title to the ships, not specific person name
        // the Enterprise is awesome so it really needs a Captain
        if (this.title == "Captain") {
            this.assignedVehicle.push("Enterprise");
        }
        // the Narada is a Romulan mining vessel so Spock (i.e. an Officer) is the only one with a chance to operate it
        if (this.title == 'Officer') {
            this.assignedVehicle.push('Narada');
        }
        // the Voyager can go off on its own so it needs a good pilot
        if (this.title == 'Pilot') {
            this.assignedVehicle.push('Voyager');
        }
    }

    enterVehicle(vehicle2) {
        // thinking that I need to search all vehicle arrays for the existence of my person
        // so they can be removed from the ship they're on before jumping in another vehicle
        // if ()
        // now placing the crew member on the new ship
        vehicle2.crewOnBoard.push(this.title);
    }
}

class vehicle {
    name;
    id;
    assignedCrew;
    crewOnBoard;

    constructor(name) {
        this.name = name;
        let randomNumber = Math.floor(Math.random() * 1000);
            this.id = randomNumber;
        this.crewOnBoard = [];
        this.assignedCrew = [];
        if (this.name == 'Enterprise') {
            this.assignedCrew.push('Captain');
        }
        if (this.name == 'Voyager') {
            this.assignedCrew.push('Pilot');
        }
        if (this.name == 'Narada') {
            this.assignedCrew.push('Officer');
        }
    }

    isReady() {
        // CAPTAIN EXAMPLE: decided that there are many different Captains in a fleet so the most important 
        // part is that a captain is on board, not necessarilly a specific captain
        // that information is left for the crew class to determine if assignment = vehicle they are on.
        if (this.assignedCrew == this.crewOnBoard) {
            return true;
        }
        else return false;
    }
}

let Enterprise = new vehicle("Enterprise");
let Voyager = new vehicle("Voyager");
let Narada = new vehicle("Narada");
let Kirk = new crewMember("Kirk", "Captain");
let Spock = new crewMember("Spock", "Officer");
let Sulu = new crewMember("Sulu", "Pilot");

Kirk.enterVehicle(Enterprise);
console.log(Kirk);
console.log(Enterprise);
let answer1 = Enterprise.isReady();
    if (answer1 = true) {
        console.log("We are ready to depart!")
    }
    if (answer1 = false) {
        console.log("Double check crew, something isn't right!")
    }