module.exports = {
  add: (a, b) => {
    if (isNaN(a) || isNaN(b)) throw new Error("Non numeric value");
    return a + b;
  },

  subtract: (a, b) => {
    if (isNaN(a) || isNaN(b)) throw new Error("Non numeric value");
    return a - b;
  },

  multiply: (a, b) => {
    if (isNaN(a) || isNaN(b)) throw new Error("Non numeric value");
    return a * b;
  },

  divide: (a, b) => {
    if (isNaN(a) || isNaN(b)) throw new Error("Non numeric value");
    if (b === 0) throw new Error("Attempt to divide by zero");
    return a / b;
  },
};
