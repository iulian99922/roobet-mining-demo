import { generateMines } from "./mines.js";

const seed = 12345;
const minesCount = 5;

const grid = generateMines(seed, minesCount);

console.log(grid);
