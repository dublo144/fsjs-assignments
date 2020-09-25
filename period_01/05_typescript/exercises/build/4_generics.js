"use strict";
// a) Implement a generic function which will take an array of any kind, and return the array reversed (just use the built-in reverse function),
// so the three first calls below will print the reversed array, and the last call will fail.
function reverseArr(arg) {
    return arg.reverse();
}
const arrowReverseArr = (arg) => {
    return arg.reverse();
};
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
console.log(reverseArr(["a", "b", "c"]));
// b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:
class DataHolder {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set value(arg) {
        this._value = arg;
    }
}
let d = new DataHolder("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);
let d2 = new DataHolder(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);
//# sourceMappingURL=4_generics.js.map