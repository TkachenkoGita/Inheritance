class Vehicle{
    constructor(dimensions, brand, model, manufactureDate ){
        this._dimensions= dimensions;
        this._brand = brand;
        this._model= model;
        this._manufactureDate = manufactureDate;
    }
    getFullInfo(){
        console.log(`This is ${this._brand} model ${this._model} ${this._manufactureDate}`);
    }
    getAge(){
        return 2023 - this._manufactureDate;
    }
}

class PassengerTransport extends Vehicle{
    constructor(dimensions, brand, model, manufactureDate, passengerLimit,  passengerCount){
    super(dimensions, brand, model, manufactureDate);
    this._passengerCount= passengerCount;
    this._passengerLimit=passengerLimit;
    
    }
    getFullInfo(){
        console.log(`This is ${this._brand} model ${this._model} ${this._manufactureDate} for ${this._passengerLimit} person.`);}
    addPassenger(){
         return this._passengerLimit<this._passengerCount?
            this._passengerCount+1:false;
            
        
        
    }

}

class FreightTransport extends Vehicle{
    constructor(dimensions, brand, model, manufactureDate,capacity){
        super(dimensions, brand, model, manufactureDate);
        this._capacity=capacity;
       
    }
    checkLoadingPossibility(weight){
        return this._capacity>weight;
    }
    getFullInfo(){
        console.log(`This is ${this._brand} model ${this._model} ${this._manufactureDate} can raise ${this._capacity} tonn`);
    }
}

const vehicle = new Vehicle(4960*2004*1700,"BMW", "X6", 2007);
const passengerTransport = new PassengerTransport(8000*4000*4000, "Some Passenger Transport", "Z12", 2012, 21, 22);
const freightTransport= new FreightTransport(6000*8000*6000, "Freight", "Frei", 2008, 20)
console.log(vehicle);
console.log(vehicle.getFullInfo());
console.log(vehicle.getAge());
console.log(passengerTransport);
console.log(passengerTransport.getFullInfo());
console.log(passengerTransport.addPassenger());
console.log(freightTransport);
console.log(freightTransport.getFullInfo());
console.log(freightTransport.checkLoadingPossibility(17))


