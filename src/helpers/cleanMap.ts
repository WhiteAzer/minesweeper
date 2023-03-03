import { CellState, GameMap } from "../types/game";

export const cleanMap = (map: GameMap, i: number, j: number) => {
  const queue: Array<[number, number]> = [[i,j]];

  while (queue.length) {
    const [x, y] = queue.shift();
    map[x][y].state = CellState.SELECTED;

    if (map[x][y].inner === 0) {
      for ( let dx = -1; dx <= 1; dx++ )
        for ( let dy = -1; dy <= 1; dy++ ) {
          if ( dx === 0 && dy === 0 ) continue;
          if (map[x + dx] &&  map[x + dx][y + dy] && map[x + dx][y + dy].state === CellState.ACTIVE && map[x + dx][y + dy].inner === 0)
            queue.push([x + dx, y + dy]);
        }
    }
  }
}