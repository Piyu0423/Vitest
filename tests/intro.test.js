import { describe, test, it, expect } from "vitest";
import { max, fizzBuzz, calculateAverage, factorial } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    //Arrange
    // const a = 2;
    // const b = 1;

    //Act
    // const results = max(a, b);

    //Assert
    // expect(results).toBe(2);

    // using a single line
    expect(max(2, 1)).toBe(2);
  });
  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return the second argument if it is equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return fizzBuzz if it is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return fizz if it is divisible by 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });
  it("should return Buzz if it is divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("should return number if it is not divisible by 5 or 3", () => {
    expect(fizzBuzz(8)).toBe("8");
  });
});

describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it("should calculate the average of an array with single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it("should calculate the average of an array with two element", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  it("should calculate the average of an array with three element", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});
