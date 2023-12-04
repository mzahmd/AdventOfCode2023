import fs from "fs";

function readFile(path: string): string {
  return fs.readFileSync(path, "utf-8").toString().trim();
}

function solution() {
  const lines = readFile("./day04/part01.txt").split("\n");
  let part1 = 0;

  lines.forEach((line) => {
    const [win, my] = line.split(": ")[1].split(" | ");

    const winNumbers: string[] = win.trim().split(" ");
    const myNumbers: string[] = my.trim().split(" ");

    console.log(winNumbers);
    
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
          } else {
            points = 2 * points;
          }
        }
      }
    }
    
    part1 += points;
  });

  console.log(part1);
}

solution();
