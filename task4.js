"use strict"

// Задание №4

function electricNet(name, power) {
    this.name = name,
    this.power = power,
    this.isTurn = false;
    
}

electricNet.prototype.checkStatus = function() {
    console.log(this.name + " status = on!");
    this.isTurn = true;
};


electricNet.prototype.isTurned = function() {
    // return (
    //     (this.isTurn) {
    //         this.power = power;
    //     } else {
    //         this.power = 0;
    //     }
    // );
    if(this.isTurn === true) {
       return this.power;
    } else {
        return this.power = 0;
    }
};
 
const lamp = new electricNet('lamp', 140);
lamp.checkStatus();

const pc = new electricNet('computer', 200);

pc.checkStatus();

console.log(pc.isTurned()+lamp.isTurned());