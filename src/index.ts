/**
   * Roulette class to get a random problem from an array of problems.
   */
export class Roulette {

  /**
   * getProblem Returns a random problem from an array of problems.
   * @returns A random problem.
   * @param {Type[]} problems - List of problems to grab a random problem from.
   */
  public static getProblem<Type>(problems: Type[]): Type {
    return problems[Math.floor(Math.random() * problems.length)];
  }
}
