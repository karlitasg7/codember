const { isValid } = require("./index");
const fs = require("fs");
const readline = require("readline");

async function readFileLineByLine(filePath) {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let lineNumber = 0;
  let linesValid = 0;
  let linesInvalid = 0;
  for await (const line of rl) {
    lineNumber++;
    console.log(`Line ${lineNumber}: ${line} (${isValid(line)})`);

    if (isValid(line)) {
      linesValid++;
    } else {
      linesInvalid++;
    }
  }

  console.log(`submit ${linesValid}true${linesInvalid}false`);
}

readFileLineByLine(__dirname + "/input.txt");
