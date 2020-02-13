
const Course = require('./course');  
  
class CourseBuilder{
    constructor(name) {
        this.name = name;
        this.sales = 0;
        this.isFree = false;
        this.price = 0;
        this.isCampain = false;
        this.dummyData = "haha"
    }

    getName() {
        return this.name;
    }    
    setSales(sales) {
        this.sales = sales;
        return this;
    }
    getSales() {
        return this.sales;
    }
    makeFree() {
        this.isFree = true;
        return this;
    }
    isFree_x1() {
        return this.isFree;
    }
    setPrice(price) {
        this.price = price;
        return this;
    }
    getPrice() {
        return this.price;
    }
    setCampain() {
        this.isCampain = true;
        return this;
    }
    isCampain_x1() {
        return this.isCampain;
    }

    setDummyData() {
        this.dummyData = "hello"
        return this;
    }

    getDummyData() {
        return this.dummyData;
    }

    build() {
        return new Course(this)
    }
}

module.exports = CourseBuilder;
