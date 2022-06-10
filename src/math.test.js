import { describe, expect, it } from "vitest";
import { add, subtract } from "./math";

describe("Test for addition", () => {
  it("should add 2 numbers", () => {
    const num1 = 2;
    const num2 = 3;
    const result = add(num1, num2);
    const expectedResult = +num1 + +num2;
    expect(result).toBe(expectedResult);
  });

  it("should return NaN", () => {
    const num1 = "Hello";
    const num2 = "world";

    const result = add(num1, num2);
    const expectedResult = +num1 + +num2;
    expect(result).toBeNaN();
  });

  it("Should type coers strings to numbers", () => {
    const num1 = "1";
    const num2 = "2";

    const result = add(num1, num2);
    const expectedResult = +num1 + +num2;
    expect(result).toBe(expectedResult);
  });

  it("Should throw error if num are not passed", () => {
    const errorFn = () => {
      add();
    };
    expect(errorFn).toThrow();
  });
});
