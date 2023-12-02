import fs from "fs";

function readFile(path: string): string {
  return fs.readFileSync(path, "utf-8").toString().trim();
}

function solutionPart1() {
  interface Bag {
    red: number;
    green: number;
    blue: number;
  }

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

  linesPart1.map((line: string) => {
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
  interface Bag {
    red: number;
    green: number;
    blue: number;
  }

  const linesPart1 = readFile("./day02/part02.txt").split("\n");

  const game: Bag = {
    red: 0,
    green: 0,
    blue: 0,
  };

  let part2 = 0;

  linesPart1.map((line: string) => {
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
    part2 += setAmount
    
    // console.log(game);
    
  });

  console.log("part2", part2);
}

// solutionPart1();
solutionPart2();
