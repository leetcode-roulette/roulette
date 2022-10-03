import { Roulette } from "../src";

test("Gets a random problem from the problems array", () => {
  const problems: string[] = ["Hello", "World", "Random"];
  const problem: string = Roulette.getProblem(problems);

  expect(problems).toContain(problem);
});
