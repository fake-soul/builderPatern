"use strict";
exports.__esModule = true;
var House = /** @class */ (function () {
    function House(houseBuilder) {
        this.address = houseBuilder.getAddress();
        this.floorNumber = houseBuilder.getFloorNumber();
        this.isHavingParking = houseBuilder.isHavingParking();
        this.isHavingGarden = houseBuilder.isHavingGarden();
    }
    return House;
}());
exports.House = House;
