const CourseBuilder = require('./CourseBuilder');

var c1 = new CourseBuilder('bharat').build();
c1.toString();
var c2 = new CourseBuilder('raj').makeFree().build();
c2.toString();
var c3 = new CourseBuilder('Bharat Raj').setSales(10000).setPrice(100).setCampain(true).build();
c3.toString()
