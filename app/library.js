'use strict'

var file = {}

var Car;

var Car = function (name = 'General', mode = 'GM', type = '') {
    this.name = name;
    this.model = mode;
    this.type = type;
    this.numOfDoors = 4;
    this.numOfWheels = 4;
    this.isSaloon = true;
    this.speed = 0;

    //Porshe and Koenigsegg has two doors
    if (name === 'Porshe' || name === 'Koenigsegg') {
        this.numOfDoors = 2;
    }

    //Tailers has 8 tyres and are not saloon
    if (type === 'trailer') {
        this.numOfWheels = 8;
        this.isSaloon = false;
    }

    //Just drive at 250 km/h
    this.drive = function (speed) {
        this.speed = '250 km/h';
    };

};

module.exports = file;
