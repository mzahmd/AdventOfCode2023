import fs from "fs";

function readFile(path: string): string {
  return fs.readFileSync(path, "utf-8").toString().trim();
}

interface Bag {
  red: number;
  green: number;
  blue: number;
}

function solution() {
  const linesPart1 = readFile("./day02/part01.txt").split("\n");

  const maxCubes = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const game: Bag = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const result: boolean[][] = [];

  let part1 = 0;

  linesPart1.map((line, index) => {
    const set = line.split(": ")[1];
    const id = index + 1;

    game.red = 0;
    game.green = 0;
    game.blue = 0;

    const tmp: boolean[] = [];

    set.split("; ").map((subset) => {
      // console.log(subset);
      subset.split(", ").map((colorSet) => {
        const [count, color] = colorSet.trim().split(" ");
        game[color as keyof Bag] += parseInt(count);
      });

      if (
        maxCubes.red >= game.red &&
        maxCubes.green >= game.green &&
        maxCubes.blue >= game.blue
      ) {
        tmp.push(true);
      } else {
        tmp.push(false);
      }

      game.red = 0;
      game.green = 0;
      game.blue = 0;

      // console.log(game);
    });
    result.push(tmp);
    // part1 += id;
  });

  console.log(result);
  result.map((boolArr, index) => {
    // console.log(boolArr);

    if (boolArr.every((e) => e === true)) {
      part1 += index + 1;
    }
  });

  console.log("part1", part1);
}

solution();
