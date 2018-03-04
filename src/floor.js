


class Floor {
    
    constructor(number, elevators, isGround = false, isTop = false) {
        this.number = number;
        this.elevators = [];
        this.isGround = isGround;
        this.isTop = isTop;
    }

    requestUp () {
        if (this.isTop) {
            return;
        }


        
    }

    requestDown () {
        if (this.isGround) {
            return;
        }


    }

    determineClosestElevator() {
        elevators.forEach(elevator => {
            if (this.number === elevator.currentFloorNumber) {
                return elevator;
            } else if (elevator.currentFloorNumber) {

            }
            
        })
    }

    reportCurrentFloor () {

    }

    reportDoorOpen() {

    }

}


module.exports = {
    Floor
}