import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";

describe("stx-utils", () => {
  it("should calculate power", () => {
    const result = simnet.callReadOnlyFn("stx-utils", "pow", [Cl.uint(2), Cl.uint(10)], wallet1);
    expect(result.result).toBe(Cl.uint(1024));
  });

  it("should calculate sqrt", () => {
    const result = simnet.callReadOnlyFn("stx-utils", "sqrt", [Cl.uint(144)], wallet1);
    expect(result.result).toBe(Cl.uint(12));
  });

  it("should sum list", () => {
    const list = Cl.list([Cl.uint(1), Cl.uint(2), Cl.uint(3)]);
    const result = simnet.callReadOnlyFn("stx-utils", "sum-list", [list], wallet1);
    expect(result.result).toBe(Cl.uint(6));
  });
});
