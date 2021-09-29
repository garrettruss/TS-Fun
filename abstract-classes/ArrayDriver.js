"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(5, 10, 20);
//console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(1, 2, 3, 6);
//console.log(myRectangle.getInfo());
//Declare an array of shapes.
var theShapes = [];
//Add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShape = theShapes_1[_i];
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
;
