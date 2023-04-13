"use strict"

// Задание №2;

let values = {
    name: "djon",
    age: 25,
    city: "vladikavkaz",
};

let showKey = function (string, obj) {
    let result = false;
    for (let key in obj) {
        if (key === string) {
            result = true;
            return result;
        }

    }
    return result;
};

console.log(showKey("name", values));