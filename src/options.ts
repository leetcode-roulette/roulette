/**
 * Roulette options.
 */
 export default interface Options {
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
