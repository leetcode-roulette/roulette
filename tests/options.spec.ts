import Roulette, { RouletteOptions } from "../src";

test("Default options pop value", () => {
  const values: string[] = ["Hello", "World", "Random"];
  const roulette: Roulette<string> = new Roulette(values);
  const value: string = roulette.pop();
  expect(roulette.values).not.toContain(value);
});

test("Default options allow set reset", () => {
  const roulette: Roulette<string> = new Roulette(["Hello", "World", "Random"]);
  roulette.values = ["New", "Problems"];
  expect(roulette.size).toBe(2);
  expect(roulette.values).toContain("New");
});

test("Setting popWhenGettingObject to false does not pop problems", () => {
  const roulette: Roulette<string> = new Roulette(["Hello"], { popWhenGettingObject: false });
  const value: string = roulette.pop();
  expect(roulette.values).toContain(value);
});

test("Setting enableSetReset to false does not allow set reset", () => {
  const roulette: Roulette<string> = new Roulette(["Problemset 1"], { enableSetReset: false });
  expect(() => roulette.values = ["Problemset 2"]).toThrow(Error);
});
