import { mulberry32 } from "./rng.js";

export function generateMines(seed, minesCount) {
  const rng = mulberry32(seed);
  const grid = Array(25).fill(0);

  let placed = 0;
  while (placed < minesCount) {
    const idx = Math.floor(rng() * 25);
    if (grid[idx] === 0) {
      grid[idx] = 1;
      placed++;
    }
  }

  return grid;
}
