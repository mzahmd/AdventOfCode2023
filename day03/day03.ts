import fs from "fs";

function readFile(path: string): string {
  return fs.readFileSync(path, "utf-8").toString().trim();
}

function solution() {
  // const lines = readFile("./day03/example.txt").split("\n");
  const lines = readFile("./day03/part01.txt").split("\n");
  let part1 = 0;

  function isSymbolAround(lineIndex: number, index: number): boolean {
    if (
      lineIndex < 0 ||
      lineIndex >= lines.length ||
      index < 0 ||
      index >= lines[lineIndex].length
    ) {
      return false;
    }

    return (
      lines[lineIndex][index] !== "." && !Number.isNaN(lines[lineIndex][index])
    );
  }

  function isSymbolTopBottom(lineIndex: number, index: number): boolean {
    if (lineIndex < 0 || lineIndex >= lines.length || index < 0 || index >= lines[lineIndex].length) {
      return false;
    }

    return (
      lines[lineIndex][index] !== "." && !Number.isNaN(lines[lineIndex][index])
    );
  }

  const numbers: number[] = [];
  lines.forEach((line, lineIndex) => {
    for (let i = 0; i < line.length; i++) {
      if (!Number.isNaN(parseInt(line[i]))) {
        let startIndex = i;
        let endIndex = i;
        let checkNumber = "";
        while (!Number.isNaN(parseInt(line[endIndex]))) {
          checkNumber += line[endIndex];
          endIndex++;
        }

        // check symbols left and right
        if (
          isSymbolAround(lineIndex, startIndex - 1) ||
          isSymbolAround(lineIndex, endIndex)
        ) {
          numbers.push(parseInt(checkNumber));
        } else {
          // check symbols at the top and bottom
          let counter = 0;
          for (let j = startIndex-1; j <= endIndex; j++, counter++) {
            // check top
            if (isSymbolTopBottom(lineIndex - 1, startIndex - 1 + counter)) {
              numbers.push(parseInt(checkNumber));
              break;
            }
            // check bottom
            if (isSymbolTopBottom(lineIndex + 1, startIndex - 1 + counter)) {
              numbers.push(parseInt(checkNumber));
              break;
            }
          }
        }
        i = endIndex;
      }
    }
  });

  part1 = numbers.reduce((current, result) => current + result, 0);
  // console.log(numbers);
  console.log(part1);
}

solution();
