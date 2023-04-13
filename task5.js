"use strict"

// Задание №5

class ElectricNet {
    constructor(name, power) {
        this.name = name,
        this.power = power,
        this.isTurn = false
    }

    checkstatus() {
        console.log(`${this.name} - is on`);
        this.isTurn = true;

    }

    isTurned() {
       return this.isTurn ? this.power : 0;
    }

}

const comp = new ElectricNet("comp", 240);

const tableLamp = new ElectricNet("lamp", 70);

comp.checkstatus();
tableLamp.checkstatus();
console.log(comp.isTurned()+tableLamp.isTurned());