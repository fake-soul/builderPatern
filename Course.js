class Course {
    constructor(courseBuilder) {
        this.name = courseBuilder.getName();
        this.sales = courseBuilder.getSales();
        this.isFree = courseBuilder.isFree_x1();
        this.price = courseBuilder.getPrice();
        this.isCampain = courseBuilder.isCampain_x1();
        this.dummyData = courseBuilder.getDummyData();
    }

    toString() {
        return console.log(JSON.stringify(this));
    }
}
module.exports = Course;
