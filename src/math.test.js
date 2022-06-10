import { describe, expect, it } from "vitest";
import { add, subtract } from "./math";

describe("Test for addition", () => {
  it("should add 2 numbers", () => {
    expect(5).toBe(add(2, 3));
  });
});
