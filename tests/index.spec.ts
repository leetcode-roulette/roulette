import Roulette from "../src";

test("Gets a random value from the values array", () => {
  const values: string[] = ["Hello", "World", "Random"];
  const roulette: Roulette<string> = new Roulette(values);
  expect(values).toContain(roulette.pop());
});

test("Does not add duplicate values", () => {
  const valuesWithDuplicates: string[] = ["Hello", "Hello"];
  const roulette: Roulette<string> = new Roulette(valuesWithDuplicates);
  expect(roulette.size).toBe(1);
});

test("Roulette pops off used values", () => {
  const values: string[] = ["Hello", "World"];
  const roulette: Roulette<string> = new Roulette(values);
  const value: string = roulette.pop();
  expect(roulette.size).toBe(1);
  expect(roulette.values).not.toContain(value);
});

test("Can reset set", () => {
  const roulette: Roulette<string> = new Roulette(["Hello"]);
  expect(roulette.size).toBe(1);

  roulette.values = ["New", "World"];
  expect(roulette.size).toBe(2);
  expect(roulette.values).not.toContain("Hello");
  expect(roulette.values).toContain("World");
});

test("Empty initialized set errors out", () => {
  expect(() => new Roulette([])).toThrow(Error);
  
  const roulette: Roulette<string> = new Roulette(["One item"]);
  roulette.pop();
  expect(() => roulette.pop()).toThrow(Error);
});
