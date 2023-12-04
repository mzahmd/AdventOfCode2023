import fs from "fs";

function readFile(path: string): string {
  return fs.readFileSync(path, "utf-8").toString().trim();
}

function solutionPart1() {
  const lines = readFile("./day04/part01.txt").split("\n");
  let part1 = 0;

  lines.forEach((line) => {
    const [win, my] = line.split(": ")[1].split(" | ");

    const winNumbers: string[] = win.trim().split(" ");
    const myNumbers: string[] = my.trim().split(" ");

    let points = 0;
    let firstMatch = false;
    let shouldDoubled = false;

    for (const myNumber of myNumbers) {
      for (const winNumber of winNumbers) {
        if (parseInt(myNumber) === parseInt(winNumber)) {
          if (!firstMatch) {
            points++;
            firstMatch = true;
            break;
          } else if (!shouldDoubled) {
            points++;
            shouldDoubled = true;
            break;
          } else {
            points = 2 * points;
            break;
          }
        }
      }
    }

    part1 += points;
  });

  console.log(part1);
}

function solutionPart2() {
  const lines = readFile("./day04/part02.txt").split("\n");

  let part2 = 0;
  const scratchCards: number[] = [];

  lines.forEach((line, cardId) => {
    const [win, my] = line.split(": ")[1].split(" | ");

    const winNumbers: string[] = win.trim().split(" ");
    const myNumbers: string[] = my.trim().split(" ");

    const scratchCard: number[] = [];
    // save original cards
    scratchCard.push(cardId + 1);
    let matching = 0;

    for (const myNumber of myNumbers) {
      for (const winNumber of winNumbers) {
        if (parseInt(myNumber) === parseInt(winNumber)) {
          // console.log(parseInt(myNumber));

          matching++;
          break;
        }
      }
    }

    // console.log('matching', matching);

    for (let i = 1; i <= matching; i++) {
      scratchCard.push(cardId + 1 + i);
    }

    scratchCards.push(...scratchCard);
  });

  for (let i = 1; i <= lines.length; i++) {
    let count = 0;
    for (let j = 1; j <= scratchCards.length; j++) {
      if (scratchCards[j] === i) {
        count++;
      }
    }
    part2 += count;
  }

  console.log(part2);
}

solutionPart1();
solutionPart2();
