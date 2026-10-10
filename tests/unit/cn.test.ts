import { describe, expect, it } from "vitest";
import { cn } from "@/lib/cn";

describe("cn", () => {
  it("drops falsy values", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });

  it("lets later Tailwind classes win", () => {
    expect(cn("px-2 text-muted", "px-4")).toBe("text-muted px-4");
  });

  it("handles object syntax", () => {
    expect(cn("btn", { "btn-on": true, "btn-off": false })).toBe("btn btn-on");
  });
});
