import Roulette, { RouletteOptions } from "../src";

test("Default options pop problem", () => {
  const problems: string[] = ["Hello", "World", "Random"];
  const roulette: Roulette<string> = new Roulette(problems);
  const problem: string = roulette.problem;
  expect(roulette.problems).not.toContain(problem);
});

test("Default options allow problemset reset", () => {
  const roulette: Roulette<string> = new Roulette(["Hello", "World", "Random"]);
  roulette.problems = ["New", "Problems"];
  expect(roulette.size).toBe(2);
  expect(roulette.problems).toContain("New");
});

test("Setting popWhenGettingProblem to false does not pop problems", () => {
  const roulette: Roulette<string> = new Roulette(["Hello"], { popWhenGettingProblem: false });
  const problem: string = roulette.problem;
  expect(roulette.problems).toContain(problem);
});

test("Setting enableProblemsetReset to false does not allow problemset reset", () => {
  const roulette: Roulette<string> = new Roulette(["Problemset 1"], { enableProblemsetReset: false });
  expect(() => roulette.problems = ["Problemset 2"]).toThrow(Error);
});
