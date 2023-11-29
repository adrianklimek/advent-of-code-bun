# Advent of Code with Bun
A template repository for solving Advent of Code and experimenting with Bun runtime.

## Getting started
1. Generate your repository using [this template](https://github.com/adrianklimek/advent-of-code-bun/generate).
2. Make sure you have installed [Bun](https://bun.sh/docs/installation#installing).
3. Install dependencies:
```bash
bun install
```
4. Create `.env` file based on `.env.example`.
5. (Optional) Set your session token with environment variables to automatically fetch your input. You can obtain the session token from the AoC session cookie.

## Running the Code
To run any solution you have to run the `solve` script. It will create all directories and files for a day, and also it can fetch your input file. Besides that, it watches all the changes you make and shows a result in a terminal.

### Example usage
To run a solution for the first day:
```bash
bun solve 1
```
To run tests in watch mode:
```bash
bun test --watch 
```
## Structure
For each day a directory in `src` is created with the following structure:
```bash
📂 01
├── 📜 01.ts
├── 📜 01.test.ts
├── 📜 example.txt
└── 📜 input.txt
```
## Closing words
Happy coding! 🎄✨
