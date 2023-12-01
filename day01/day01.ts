import fs from "fs";

function readFile(): string {
  return fs.readFileSync("./day01/part01.txt", "utf-8").toString();
  // return fs.readFileSync("./day01/part02.txt", "utf-8").toString();
}

function solution() {
  const lines = readFile().split("\n");

  let strNumber: string = "";
  let result: number = 0;
  for (const line of lines) {
    for (const char of line) {
      if (!Number.isNaN(parseInt(char))) {
        console.log(char);
        strNumber += char;
      }
    }

    console.log("strNumber", strNumber);
    if (strNumber.length === 0) {
      // do nothing
    } else if (strNumber.length === 1) {
      strNumber += strNumber;
      result += parseInt(strNumber);
    } else {
      result += parseInt(strNumber[0] + strNumber[strNumber.length - 1]);
    }
    strNumber = "";
  }

  console.log(result);
}

solution();
