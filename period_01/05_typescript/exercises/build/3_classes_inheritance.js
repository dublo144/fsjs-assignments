"use strict";
// A) The declaration below defines a Shape class, which as it's only properties has a color field +  a getArea()
// and a getPerimeter() function which both returns undefined. This is the closest we get to an abstract method in Java.
// Provide the class with a nice (using template literals) toString() method  + a getter/setter for the colour property.
// Verify that you cannot (why) make an instance of this class.
class Shape {
    constructor(color) {
        this._color = color;
    }
    get color() {
        return this._color;
    }
}
// const wrongShape = new Shape(); // We cannot make an instance of it, because its abstract.
// B) Create a new class Circle that should extend the Shape class.
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    get readius() {
        return this.radius;
    }
    get area() {
        return Math.PI * this.radius;
    }
    get perimeter() {
        return 2 * Math.PI * this.radius;
    }
    get color() {
        return super.color;
    }
    toString() {
        return `A ${super.color} circle with a radius of ${this.radius}`;
    }
}
const myCircle = new Circle("red", 30);
console.log(myCircle.toString());
console.log(myCircle.area);
console.log(myCircle.perimeter);
console.log(myCircle.color);
// C) Create a new class Cylinder (agreed, definitely not a perfect inheritance example) that should extend the Circle class.
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    get area() {
        return super.area;
    }
    get perimeter() {
        throw "Not Implemented";
    }
    get color() {
        return super.color;
    }
    get volume() {
        return this.height * Math.PI * super.readius * super.readius;
    }
    get height() {
        return this._height;
    }
    set height(h) {
        this._height = h;
    }
    toString() {
        return `Color: ${super.color}, Area: ${super.area}, volume: ${this.volume}`;
    }
}
const cylinder = new Cylinder("green", 10, 50);
console.log(cylinder.toString());
cylinder.height = 100;
console.log(cylinder.toString());
//# sourceMappingURL=3_classes_inheritance.js.map