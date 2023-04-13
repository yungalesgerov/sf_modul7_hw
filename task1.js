"use strict"
// Задание 1.

let obj = {
    city: "Moscow"
};

let student = Object.create(obj);
student.ownCity = "piter";

let showOwnValues = function (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}:` + obj[key]);
        }
        // console.log(obj.hasOwnProperty(key));
    }
};
showOwnValues(student);
