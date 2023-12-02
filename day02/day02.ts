import fs from "fs";

function readFile(path: string): string {
  return fs.readFileSync(path, "utf-8").toString().trim();
}

function solutionPart1() {
  const lines = readFile("./day02/part01.txt").split("\n");

  interface Bag {
    red: number;
    green: number;
    blue: number;
  }

  const game: Bag = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const result: boolean[][] = [];

  let part1 = 0;

  lines.map((line) => {
    const set = line.split(": ")[1];

    game.red = 0;
    game.green = 0;
    game.blue = 0;

    const tmp: boolean[] = [];

    set.split("; ").map((subset) => {
      subset.split(", ").map((colorSet) => {
        const [count, color] = colorSet.trim().split(" ");
        game[color as keyof Bag] += parseInt(count);
      });
      if (game.red <= 12 && game.green <= 13 && game.blue <= 14) {
        tmp.push(true);
      } else {
        tmp.push(false);
      }
      game.red = 0;
      game.green = 0;
      game.blue = 0;
    });
    result.push(tmp);
  });

  result.map((boolArr, index) => {
    if (boolArr.every((e) => e === true)) {
      part1 += index + 1;
    }
  });

  console.log("part1", part1);
}

function solutionPart2() {
  const lines = readFile("./day02/part02.txt").split("\n");

  interface Bag {
    red: number;
    green: number;
    blue: number;
  }

  const game: Bag = {
    red: 0,
    green: 0,
    blue: 0,
  };

  let part2 = 0;

  lines.map((line) => {
    const set = line.split(": ")[1];

    game.red = 0;
    game.green = 0;
    game.blue = 0;

    set.split("; ").map((subset) => {
      subset.split(", ").map((colorSet) => {
        const [count, color] = colorSet.trim().split(" ");
        if (game[color as keyof Bag] < parseInt(count)) {
          game[color as keyof Bag] = parseInt(count);
        }
      });
    });

    const setAmount = game.red * game.green * game.blue;
    part2 += setAmount;
  });

  console.log("part2", part2);
}

solutionPart1();
solutionPart2();
