import fs from "fs";

function readFile(path: string): string {
  return fs.readFileSync(path, "utf-8").toString();
}

const words = [
  ["zero","zero0zero"],
  ["one","one1one"],
  ["two","two2two"],
  ["three","three3three"],
  ["four","four4four"],
  ["five","five5five"],
  ["six","six6six"],
  ["seven","seven7seven"],
  ["eight","eight8eight"],
  ["nine","nine9nine"]
];

function solution() {
  const linesPart1 = readFile("./day01/part02.txt").split("\n");
  const linesPart2 = readFile("./day01/part02.txt").split("\n");

  let part1: number =  0;
  let part2: number = 0;

  let strNumber: string = "";
  
  for (const line of linesPart1) {
    for (const char of line) {
      if (!Number.isNaN(parseInt(char))) {
        // console.log(char);
        strNumber += char;
      }
    }

    if (strNumber.length === 0) {
      // do nothing
    } else if (strNumber.length === 1) {
      strNumber += strNumber;
      part1 += parseInt(strNumber);
    } else {
      part1 += parseInt(strNumber[0] + strNumber[strNumber.length - 1]);
    }
    strNumber = "";
  }


  strNumber = "";

  for (let line of linesPart2) {
    strNumber = "";
    
    for(const [word, replaceWord] of words) {
      line = line.replaceAll(word, replaceWord);
    }

    for (const char of line) {
      if (!Number.isNaN(parseInt(char))) {
        strNumber += char;
      }
    }

    if (strNumber.length === 0) {
      // do nothing
    } else if (strNumber.length === 1) {
      strNumber += strNumber;
      part2 += parseInt(strNumber);
    } else {
      part2 += parseInt(strNumber[0] + strNumber[strNumber.length - 1]);
    }

    strNumber = "";
  }

  console.log(part1);
  console.log(part2);
}

solution();
