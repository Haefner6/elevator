


class Elevator {
    
    constructor() {
        this.numberOfTrips = 0;
        this.floorsPassed = 0;
        this.inMaintenanceMode = false;
        this.direction = null;
        this.currentFloorNumber = 1;
        this.requestedFloorNumbers = []
    }

    reportStatus() {

    }

    reportFloor() {

    }

    reportDoorStatus() {

    }

    isOccupied() {
        if (this.requestedFloorNumbers.length > 0) {
            return true;
        }
        return false;
    }


}


module.exports = {
    Elevator
}