"use strict"

// Задание №3

let createObj = function() {
    let create = Object.create(null);
    return create;
};

let check = createObj();
console.log(Object.getPrototypeOf(check));