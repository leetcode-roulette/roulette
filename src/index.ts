/**
 * Roulette options.
 */
interface RouletteOptions {
  /**
   * Boolean value that indicates if a value should be removed from the set when it is retrieved.
   * @default true
   */
  popWhenGettingObject: boolean;

  /**
   * Boolean value that indicates if the set can be reset after initialization.
   * @default true
   */
  enableSetReset: boolean;
};

const DEFAULT_OPTIONS: RouletteOptions = {
  popWhenGettingObject: true,
  enableSetReset: true
};

/**
   * Roulette class to get a random values from a set of values.
   */
export default class Roulette<T> {
  private static NO_VALUES_ERROR: Error = new Error("set is empty.");
  private set: Set<T>;
  private options: RouletteOptions = DEFAULT_OPTIONS;

  /**
   * Creates new Roulette instance with initial set.
   * @param values Initial values array.
   * @param options Roulette options.
   */
  constructor(values: T[], options?: Partial<RouletteOptions>) {
    if (values.length === 0) {
      throw Roulette.NO_VALUES_ERROR;
    }

    this.set = new Set(values);
    this.options = {...this.options, ...options};
  }

  /**
   * Gets a random value from set and deletes it.
   * @returns A random value from the set.
   */
  public pop(): T {
    if (this.set.size === 0) {
      throw Roulette.NO_VALUES_ERROR;
    }

    const index: number = Math.floor(Math.random() * this.set.size);
    const values: T[] = Array.from(this.set);
    const value: T = values[index];

    if (this.options.popWhenGettingObject) {
      this.set.delete(value);
    }
    
    return value;
  }

  /**
   * Gets the number of values left in the set.
   * @returns Size of the set.
   */
  public get size(): number {
    return this.set.size;
  }

  /**
   * Gets array of available problems from problemset.
   * @returns Array of problems in the problemset.
   */
  public get values(): T[] {
    return Array.from(this.set);
  }

  /**
   * Sets the set to the provided objects.
   */
  public set values(values: T[]) {
    if (!this.options.enableSetReset) {
      throw new Error("Unable to reset set when enableSetReset is false. Try changing this value to true.");
    }

    if (values.length === 0) {
      throw Roulette.NO_VALUES_ERROR;
    }

    this.set = new Set(values);
  }
}

export {
  RouletteOptions
}
