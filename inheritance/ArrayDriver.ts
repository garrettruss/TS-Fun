import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10, 15);
//console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
//console.log(myCircle.getInfo());

let myRectangle = new Rectangle(1, 2, 3, 6);
//console.log(myRectangle.getInfo());

//Declare an array of shapes.
let theShapes: Shape[] = [];

//Add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);


for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
};