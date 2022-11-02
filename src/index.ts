/**
 * Roulette options.
 */
interface RouletteOptions {
  /**
   * Boolean value that indicates if a problem should be removed from the problemset when it is retrieved.
   * @default true
   */
  popWhenGettingProblem: boolean;

  /**
   * Boolean value that indicates if the problemset can be reset after initialization.
   * @default true
   */
  enableProblemsetReset: boolean;
};

const DEFAULT_OPTIONS: RouletteOptions = {
  popWhenGettingProblem: true,
  enableProblemsetReset: true
};

/**
   * Roulette class to get a random problem from an array of problems.
   */
export default class Roulette<T> {
  private static NO_PROBLEMS_ERROR: Error = new Error("Problemset is empty.");
  private problemset: Set<T>;
  private options: RouletteOptions = DEFAULT_OPTIONS;

  /**
   * Creates new Roulette instance with initial problemset.
   * @param problems Initial problemset.
   * @param options Roulette options.
   */
  constructor(problems: T[], options?: Partial<RouletteOptions>) {
    if (problems.length === 0) {
      throw Roulette.NO_PROBLEMS_ERROR;
    }

    this.problemset = new Set(problems);
    this.options = {...this.options, ...options};
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

    if (this.options.popWhenGettingProblem) {
      this.problemset.delete(problem);
    }
    
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
    if (!this.options.enableProblemsetReset) {
      throw new Error("Unable to reset problemset when enableProblemsetReset is false. Try changing this value to true.");
    }

    if (problems.length === 0) {
      throw Roulette.NO_PROBLEMS_ERROR;
    }

    this.problemset = new Set(problems);
  }
}

export {
  RouletteOptions
}
