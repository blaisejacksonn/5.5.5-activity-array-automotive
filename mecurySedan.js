//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

class car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }

    start(){
        if (this.fuel > 0){
            return this.started = true
            console.log('engine started...!')
        }
        else {
            return this.started = false
            console.log('you have no fuel')
        }
    }

loadPassenger(){
    if (this.passenger < this.maximumPassengers){
        if ((num + this.passenger) <= this.maximumPassengers){
            this.passenger = num
            return this.passenger
        } 
        else {
            console.log(this.model + '' + this.make + 'not enough seats')
        }
    }
}
checkService(){
    if (this.mileage > 3000) {
        this.scheduleService = true
        return this.scheduleService
        console.log ('need to schedule appointment')
    }
}
}





//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
