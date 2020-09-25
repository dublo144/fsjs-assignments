"use strict";
// a) Create an interface to describe a function: myFunc that
// should take three string parameters and return a String Array.
// b) Design a function "implementing" this interface which returns an array
// with the three strings
let myFunc;
myFunc = (s1, s2, s3) => {
    return [s1, s2, s3];
};
// c) Design another implementation that returns an array, with the three strings uppercased.
let myFuncUpper;
myFuncUpper = (s1, s2, s3) => {
    return [s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase()];
};
// d) The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables,
// to simulate a method that uses the interface.
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["A", "B", "C"];
    console.log(f1(a, b, c));
};
f2(myFunc);
f2(myFuncUpper);
//# sourceMappingURL=interfaces_2.js.map