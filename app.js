"use strict";
exports.__esModule = true;
var house_builder_1 = require("./house-builder");
var myHouse = new house_builder_1.HouseBuilder('Adder')
    .setFloor(5)
    .makeGarden()
    .makeParking()
    .build();
