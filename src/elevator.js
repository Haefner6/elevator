


class Elevator {
    
    constructor() {
        this.numberOfTrips = 0;
        this.floorsPassed = 0;
        this.inMaintenanceMode = false;
        this.direction = null;
        this.currentFloorNumber = 1;
        this.requestedFloorNumbers = []
        this.isDoorOpen = false;

    }

    move() {

        
    }



    floorsRequest () {


        if (this.requestedFloorNumbers.length > 0) {
            if (this.direction === 'up') {
                this.requestedFloorNumbers.sort();
            } else {
                this.requestedFloorNumbers.sort();
            }
            this.closeDoors();
            this.requestedFloorNumbers.forEach(floorNumber => {
                this.moveToFloor(floorNumber);
            });
        }
    }

    moveToFloor (floorNumber) {


    }



    closeDoors () {
        if (this.isDoorOpen) {
            // close door
        }
    }

    openDoors () {
        
    }

    setDirection(currentFloorNumber, requestFloorNumber) {
        if (currentFloorNumber > requestFloorNumber) {
            this.direction = 'down';
        } else {
            this.direction = 'up';
        }
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