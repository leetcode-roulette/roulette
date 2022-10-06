/**
   * Roulette class to get a random problem from an array of problems.
   */
export default class Roulette<T> {
  private static NO_PROBLEMS_ERROR: Error = new Error("Problemset is empty.");
  private problemset: Set<T>;

  /**
   * Creates new Roulette instance with initial problemset.
   * @param problems Initial problemset.
   */
  constructor(problems: T[]) {
    if (problems.length === 0) {
      throw Roulette.NO_PROBLEMS_ERROR;
    }

    this.problemset = new Set(problems);
  }

  /**
   * Gets a random problem from problemset and deletes it.
   * @returns A random problem.
   */
  public get problem(): T {
    if (this.problemset.size === 0) {
      throw Roulette.NO_PROBLEMS_ERROR;
    }

    const index: number = Math.floor(Math.random() * this.problemset.size);
    const problems: T[] = Array.from(this.problemset);
    const problem: T = problems[index];

    this.problemset.delete(problem);
    return problem;
  }

  /**
   * Gets the number of problems left in the problemset.
   * @returns Size of the problemset.
   */
  public get size(): number {
    return this.problemset.size;
  }

  /**
   * Gets array of available problems from problemset.
   * @returns Array of problems in the problemset.
   */
  public get problems(): T[] {
    return Array.from(this.problemset);
  }

  /**
   * Sets the problemset to the provided problems.
   */
  public set problems(problems: T[]) {
    if (problems.length === 0) {
      throw Roulette.NO_PROBLEMS_ERROR;
    }

    this.problemset = new Set(problems);
  }
}
