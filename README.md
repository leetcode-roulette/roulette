<h1 align="center">Welcome to Leetcoderoulette Roulette 👋</h1>

![Build status](https://github.com/leetcode-roulette/roulette/actions/workflows/tests.yml/badge.svg)
[![code coverage](https://codecov.io/gh/leetcode-roulette/roulette/branch/master/graph/badge.svg)](https://codecov.io/gh/leetcode-roulette/roulette)
[![install size](https://packagephobia.com/badge?p=@leetcoderoulette/roulette)](https://packagephobia.com/result?p=@leetcoderoulette/roulette)

> Roulette class that returns a random problem similar to a roulette table.

## Installing

Using npm:

```bash
$ npm install @leetcoderoulette/roulette
```

## Example

### note: CommonJS usage
In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()` use the following approach:

```js
const Roulette = require('@leetcoderoulette/roulette');

// Roulette.<method> will now provide autocomplete and parameter typings
```

Creating a new Roulette object and getting problems

```js
const roulette = new Roulette(["Hello", "World"]);

const values = roulette.values; // Returns ["Hello", "World"]
const value = roulette.pop(); // Returns either "Hello" or "World"
```

Adding a new set

```js
roulette.values = ["New", "Problems"];

const values = roulette.values; // Returns ["New", "Problems"]
```

### Roulette API
A roulette object can be made by passing in an array of values to `Roulette`.

##### Roulette(values, options?)

```js
// Create a new Roulette object.
new Roulette(["value1", "value2"]);
```

### Instance methods

The available instance methods are listed below.

##### roulette.pop()
##### get roulette.values()
##### set roulette.values(values)

## TypeScript

Roulette includes [TypeScript](https://typescriptlang.org) definitions and a type guard for roulette errors.

```typescript
let roulette: Roulette<string> = new Roulette(["Hello", "World"]);

const values: string[] = roulette.values; // Returns ["Hello", "World"]
const value: string = roulette.pop(); // Returns "Hello" or "World"

roulette.values = ["New", "Problems"];
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.<br />
Feel free to check [issues page](https://github.com/leetcode-roulette/leetcode/issues) if you want to contribute.<br />
[Check the contributing guide](./CONTRIBUTING.md).<br />

## Author

👤 **Leetcode Roulette**

- Website: [Leetcode Roulette](https://leetcoderoulette.com)

## 📝 License

Copyright © 2022 [Leetcode Roulette](https://github.com/leetcode-roulette).<br />
This project is [MIT](https://github.com/leetcode-roulette/roulette/blob/master/LICENSE) licensed.

---