"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roulette = void 0;
/**
   * Roulette class to get a random problem from an array of problems.
   */
class Roulette {
    /**
     * getProblem Returns a random problem from an array of problems.
     * @returns A random problem.
     * @param {Type[]} problems - List of problems to grab a random problem from.
     */
    static getProblem(problems) {
        return problems[Math.floor(Math.random() * problems.length)];
    }
}
exports.Roulette = Roulette;
