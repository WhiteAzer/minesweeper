import { GameMap, GameMask } from "../types/game";

export const cleanMap = (map: GameMap, mask: GameMask, i: number, j: number) => {
  const queue: Array<[number, number]> = [[i,j]];

  while (queue.length) {
    const [x, y] = queue.shift();
    mask[x][y] = "selected";

    if (map[x][y] === 0) {
      if (map[x + 1] && mask[x + 1][y] === "active" && map[x + 1][y] === 0) queue.push([x + 1, y]);
      if (map[x - 1] && mask[x + 1][x - 1][y] === "active" && map[x - 1][y] === 0) queue.push([x - 1, y]);
      if (map[x + 1] && mask[x + 1][y + 1] === "active" && map[x + 1][y + 1] === 0) queue.push([x + 1, y + 1]);
      if (map[x + 1] && mask[x + 1][y - 1] === "active" && map[x + 1][y - 1] === 0) queue.push([x + 1, y - 1]);
      if (map[x - 1] && mask[x - 1][y + 1] === "active" && map[x - 1][y + 1] === 0) queue.push([x - 1, y + 1]);
      if (map[x - 1] && mask[x - 1][y - 1] === "active" && map[x - 1][y - 1] === 0) queue.push([x - 1, y - 1]);
      if (mask[x][y + 1] === "active" && map[x][y + 1] === 0) queue.push([x, y + 1]);
      if (mask[x][y - 1] === "active" && map[x][y - 1] === 0) queue.push([x, y - 1]);
    }
  }
  // const stack: Array<[number, number]> = [[i,j]];
  //
  // while (stack.length) {
  //   const [x, y] = stack.pop()!!;
  //   mask[x][y] = "selected";
  //
  //   if (map[x][y] === 0) {
  //     if (map[x + 1] && map[x + 1][y] === 0) stack.push([x + 1, y]);
  //     if (map[x - 1] && map[x - 1][y] === 0) stack.push([x - 1, y]);
  //     // if (map[x + 1] && map[x + 1][y + 1] === 0) queue.push([x + 1, y + 1]);
  //     // if (map[x + 1] && map[x + 1][y - 1] === 0) queue.push([x + 1, y - 1]);
  //     // if (map[x - 1] && map[x - 1][y + 1] === 0) queue.push([x - 1, y + 1]);
  //     // if (map[x - 1] && map[x - 1][y - 1] === 0) queue.push([x - 1, y - 1]);
  //     if (map[x][y + 1] === 0) stack.push([x, y + 1]);
  //     if (map[x][y - 1] === 0) stack.push([x, y - 1]);
  //   }
  // }
}