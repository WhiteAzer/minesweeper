import { GameMap } from "src/types/game";

const incrementCell = (map: GameMap, i: number, j: number, size: number) => {
  if (map[i * size + j] !== undefined && map[i * size + j] !== -1) map[i * size + j]++;
}

const setSurroundings = (map: GameMap, i: number, j: number, size: number) => {
  incrementCell(map, i + 1, j, size);
  incrementCell(map, i - 1, j, size);
  incrementCell(map, i + 1, j + 1, size);
  incrementCell(map, i + 1, j - 1, size);
  incrementCell(map, i - 1, j + 1, size);
  incrementCell(map, i - 1, j - 1, size);
  incrementCell(map, i, j + 1, size);
  incrementCell(map, i, j - 1, size);

  return map;
}

export const getGameMap = (size: number, bombsCount: number, initialCoords: [number, number]): GameMap => {
  const map = new Array(size * size).fill(0);

  for (let count = 0; count < bombsCount; count++) {
    const i = Math.floor(Math.random() * size);
    const j = Math.floor(Math.random() * size);

    if (map[i * size + j] === -1 || i === initialCoords[0] && j === initialCoords[1]) continue;

    map[i * size + j] = -1;

    setSurroundings(map, i, j, size);
  }

  return map;
}