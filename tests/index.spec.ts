import { Roulette } from "../src";

test("Gets a random problem from the problems array", () => {
  const problems: string[] = ["Hello", "World", "Random"];
  const roulette: Roulette<string> = new Roulette(problems);
  expect(problems).toContain(roulette.problem);
});

test("Does not add duplicate problems", () => {
  const problemsWithDuplicates: string[] = ["Hello", "Hello"];
  const roulette: Roulette<string> = new Roulette(problemsWithDuplicates);
  expect(roulette.size).toBe(1);
});

test("Roulette pops off used problems", () => {
  const problems: string[] = ["Hello", "World"];
  const roulette: Roulette<string> = new Roulette(problems);
  const problem: string = roulette.problem;
  expect(roulette.size).toBe(1);
  expect(roulette.problems).not.toContain(problem);
});
