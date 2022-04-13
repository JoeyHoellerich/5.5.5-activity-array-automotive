//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

// Car is an extension of Vehicle
class Car extends VehicleModule.Vehicle {
    // adds: maximumPassengers, passengers, numWheels, maxSpeed, fuel, and scheduleService
    // fromVehicle: make, model, year, color, mileage
    
    constructor(make, model, year, color, mileage, maximumPassengers, passenger, numberOfWheels, maxiumumSpeed, fuel, scheduleService){
        //use the properties from the Vehicle class based on these attributes (also includes the methods)
        super(make, model, year, color, mileage);

        // add these on top of the vehicle class
        this.maximumPassengers = maximumPassengers;
        this.passenger = passenger;
        this.numberOfWheels = numberOfWheels;
        this.maxiumumSpeed = maxiumumSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
    }

    //If the current number of passengers + the new number of passengers is less than the maxiumum allowed passengers, set available room to true
    loadPassenger(num){
        if ((this.passenger + num) <= this.maximumPassengers){
            let availableRoom = true;
        }
        // if (current passenger number) + (new passengers) > (maxiumum passengers) set available room to false
        else {
            let availableRoom = false;
        }
    }

    //if fuel is not empty (=/= 0), then the car is started, if fuel is empty (== 0) the car is not started
    start(){
        if(this.fuel > 0){
            this.started = true;
        }
        else {
            this.started =false;
        }
    }

    // if the car's mileage is above 30,000 miles, set the schedule service parameter to true, if not set it to false
    scheduleService(){
        if (this.mileage > 30000){
            this.scheduleService = true;
        }
        else {
            this.scheduleService = false;
        }
    }
}

class Truck extends VehicleModule.Vehicle {
    // adds: cargoWeight, maxCargoWeight, numWheels
    // fromVehicle: make, model, year, color, mileage
    
    constructor(make, model, year, color, mileage, cargoWeight, maxCargoWeight, numAxel){
        //use the properties from the Vehicle class based on these attributes (also includes the methods)
        super(make, model, year, color, mileage);

        // add these on top of the vehicle class
        this.cargoWeight = cargoWeight;
        this.maxCargoWeight = maxCargoWeight;
        this.numAxel = numAxel;
    }

    //make sure the truck isn't carrying too much cargo
    scaleTruck(){
        if (this.cargoWeight < this.maxCargoWeight){
            console.log("Truck Passes")
        }
        else {
            console.log("Truck Fails")
        }
    }

    // return the toll cost for the truck
    toll(costPerAxel){
        let toll = this.numAxel * costPerAxel;
        return toll;
    }
}

// define new object based on the Car Class
let newCar = new Car("Mecury", "sedan", "1965", "green", "0", "5", "1", "4", "158", 10, false);
let newTruck = new Truck("Volvo", "truck", "2001", "white", "123020", "1500", "5000", 6);

