"use strict";
exports.__esModule = true;
var house_1 = require("./house");
var HouseBuilder = /** @class */ (function () {
    function HouseBuilder(address) {
        this.floorNumber = 0;
        this.withParking = false;
        this.withGarden = false;
        this.address = address;
    }
    HouseBuilder.prototype.setFloor = function (floor) {
        this.floorNumber = floor;
        return this;
    };
    HouseBuilder.prototype.makeParking = function () {
        this.withParking = true;
        return this;
    };
    HouseBuilder.prototype.makeGarden = function () {
        this.withGarden = true;
        return this;
    };
    HouseBuilder.prototype.build = function () {
        return new house_1.House(this);
    };
    HouseBuilder.prototype.isHavingParking = function () {
        return this.withParking;
    };
    HouseBuilder.prototype.isHavingGarden = function () {
        return this.withGarden;
    };
    HouseBuilder.prototype.getAddress = function () {
        return this.address;
    };
    HouseBuilder.prototype.getFloorNumber = function () {
        return this.floorNumber;
    };
    return HouseBuilder;
}());
exports.HouseBuilder = HouseBuilder;
