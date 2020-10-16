const expect = require("chai").expect;
const calculator = require("../lib/calculator");

describe("Calculator Arithmetic Operations", () => {
  describe("Addition", () => {
    it("adds two numbers", () => {
      expect(calculator.add(2, 2)).to.equal(4);
    });

    it("adds negative numbers", () => {
      expect(calculator.add(-3, -2)).to.equal(-5);
    });

    it("adds both positive and negative numbers", () => {
      expect(calculator.add(10, -7)).to.equal(3);
    });

    it("throws error if non numerical value", () => {
      expect(() => calculator.add("two", "two")).to.throw(Error);
    });
  });

  describe("Subtraction", () => {
    it("subtracts two numbers", () => {
      expect(calculator.subtract(5, 2)).to.equal(3);
    });

    it("subtracts negative numbers", () => {
      expect(calculator.subtract(-2, -2)).to.equal(0);
    });

    it("subtracts both positive and negative numbers", () => {
      expect(calculator.subtract(6, -3)).to.equal(9);
    });

    it("throws error if non numerical value", () => {
      expect(() => calculator.subtract("two", "two")).to.throw(Error);
    });
  });

  describe("Multiplication", () => {
    it("multiplies two numbers", () => {
      expect(calculator.multiply(5, 2)).to.equal(10);
    });

    it("multiplies negative numbers", () => {
      expect(calculator.multiply(-2, -2)).to.equal(4);
    });

    it("subtracts both positive and negative numbers", () => {
      expect(calculator.multiply(5, -4)).to.equal(-20);
    });

    it("throws error if non numerical value", () => {
      expect(() => calculator.multiply("two", "two")).to.throw(Error);
    });
  });

  describe("Division", () => {
    it("divides two numbers", () => {
      expect(calculator.divide(10, 2)).to.equal(5);
    });

    it("divides negative numbers", () => {
      expect(calculator.divide(-10, -2)).to.equal(5);
    });

    it("divides both positive and negative numbers", () => {
      expect(calculator.divide(10, -2)).to.equal(-5);
    });

    it("throws error if non numerical value", () => {
      expect(() => calculator.divide("two", "two")).to.throw(Error);
    });

    it("throws error if divide by 0", () => {
      expect(() => calculator.divide(2, 0)).to.throw(Error);
    });
  });
});
