# String Calculator

A TypeScript implementation of the String Calculator kata, following Test-Driven Development (TDD) practices.

## Description

This project implements a string calculator that can add numbers from a string input. It supports various formats and features:

1. Basic Operations:

   - Empty string returns 0
   - Single number returns the number
   - Two numbers separated by comma returns their sum
   - Multiple numbers separated by comma returns their sum

2. Delimiter Support:

   - Default delimiters: comma (,) and newline (\n)
   - Custom single-character delimiter: `//;\n1;2` → returns 3
   - Custom multi-character delimiter: `//**\n1**2**3` → returns 6
   - Custom delimiter in brackets: `//[***]\n1***2***3` → returns 6
   - Multiple custom delimiters: `//[*][%]\n1*2%3` → returns 6

3. Additional Features:
   - Numbers bigger than 1000 are ignored
   - Negative numbers throw an error with the list of negative numbers
   - Invalid numbers throw an error

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd string-tdd

# Install dependencies
yarn install
```

## Usage

```typescript
import { add } from "./calculator";

// Basic usage
add(""); // returns 0
add("1"); // returns 1
add("1,2"); // returns 3
add("1,2,3,4,5"); // returns 15

// Using newlines
add("1\n2,3"); // returns 6

// Using custom delimiters
add("//;\n1;2"); // returns 3
add("//**\n1**2**3"); // returns 6
add("//[***]\n1***2***3"); // returns 6
add("//[*][%]\n1*2%3"); // returns 6

// Numbers over 1000 are ignored
add("2,1001"); // returns 2
add("2,1000,3"); // returns 1005

// Error cases
add("1,-2"); // throws "Negative numbers not allowed: -2"
add("1,a"); // throws "Invalid number"
```

## Running Tests

```bash
# Run tests
npm run test

```

## Project Structure

- `calculator.ts` - Main implementation of the string calculator
- `calculator.test.ts` - Test suite for the calculator
- `package.json` - Project dependencies and scripts
- `yarn.lock` - Locked dependencies

## Development

This project uses:

- TypeScript for type safety
- Vitest for testing
- Yarn for package management

## License

MIT
