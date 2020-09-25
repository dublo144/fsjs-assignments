// A) The declaration below defines a Shape class, which as it's only properties has a color field +  a getArea()
// and a getPerimeter() function which both returns undefined. This is the closest we get to an abstract method in Java.

// Provide the class with a nice (using template literals) toString() method  + a getter/setter for the colour property.
// Verify that you cannot (why) make an instance of this class.
abstract class Shape {
  private _color: string;
  constructor(color: string) {
    this._color = color;
  }
  abstract get area(): number;
  abstract get perimeter(): number;
  abstract toString(): string;
  get color(): string {
    return this._color;
  }
}

// const wrongShape = new Shape(); // We cannot make an instance of it, because its abstract.

// B) Create a new class Circle that should extend the Shape class.

class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  get readius(): number {
    return this.radius;
  }

  get area(): number {
    return Math.PI * this.radius;
  }
  get perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
  get color(): string {
    return super.color;
  }
  toString(): string {
    return `A ${super.color} circle with a radius of ${this.radius}`;
  }
}

const myCircle: Circle = new Circle("red", 30);

console.log(myCircle.toString());
console.log(myCircle.area);
console.log(myCircle.perimeter);
console.log(myCircle.color);

// C) Create a new class Cylinder (agreed, definitely not a perfect inheritance example) that should extend the Circle class.

class Cylinder extends Circle {
  private _height: number;

  constructor(color: string, radius: number, height: number) {
    super(color, radius);
    this._height = height;
  }

  get area(): number {
    return super.area;
  }

  get perimeter(): number {
    throw "Not Implemented";
  }

  get color(): string {
    return super.color;
  }

  get volume(): number {
    return this.height * Math.PI * super.readius * super.readius;
  }

  get height(): number {
    return this._height;
  }

  set height(h: number) {
    this._height = h;
  }

  toString(): string {
    return `Color: ${super.color}, Area: ${super.area}, volume: ${this.volume}`;
  }
}

const cylinder = new Cylinder("green", 10, 50);
console.log(cylinder.toString());

cylinder.height = 100;
console.log(cylinder.toString());
