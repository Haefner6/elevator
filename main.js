

const { Elevator } = require('./src/elevator')
const { Floor } = require('./src/floor')

function initializeFloors (numberOfFloors = 1) {
    let floors = [];
    for (let i = 0; i < numberOfFloors; i++) {
        floors.push(new Floor(i));
    }
    return floors;
}
function initializeElevators (numberOfElevators = 1) {
    let elevators = [];
    for (let i = 0; i < numberOfElevators; i++) {
        elevators.push(new Elevator());
    }
    return elevators;
}

function initializeSimulation (numberOfElevators = 1, numberOfFloors = 1) {

    const elevators = initializeElevators(numberOfElevators);
    const floors = initializeFloors(numberOfFloors, elevators);

}

initializeSimulation(1, 10);