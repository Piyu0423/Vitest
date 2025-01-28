import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    //Arrange
    const a = 2;
    const b = 1;

    //AAA
    const results = max(a, b);

    //Assert
    expect(results).toBe(2);

    // using a single line
    // expect(max(a, b)).toBe(2);
  });
});
