


class Elevator {
    
    constructor() {
        this.numberOfTrips = 0;
        this.floorsPassed = 0;
        this.inMaintenanceMode = false;
        this.direction = null;
        this.currentFloor = 1;
        this.requestedFloors = []
    }

    reportStatus() {

    }

    reportFloor() {

    }

    reportDoorStatus() {

    }

    isOccupied() {
        if (this.requestedFloors.length > 0) {
            return true;
        }
        return false;
    }


}


module.exports = {
    Elevator
}