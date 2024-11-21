import { describe, expect, it } from "vitest";
import { generateHomyo } from "./homyo";

describe("Homyo toString", () => {
  it("should return string", () => {
    const homyo = generateHomyo();

    expect(homyo.toString()).equal("仏道");
  });
});
