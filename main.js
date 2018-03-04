

const { Elevator } = require('./src/elevator')
const { Floor } = require('./src/floor')

function initializeElevators (numberOfElevators = 1, numberOfFloors = 1) {

    let elevators = [];
    for (let i = 0; i < numberOfElevators; i++) {
        elevators.push(new Elevator());
    }
}

initializeElevators (1, 10);