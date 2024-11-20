const { getTotalSteps } = require("./index");
const fs = require("fs");
const readline = require("readline");

async function readFileLineByLine(filePath) {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let lineNumber = 0;

  let sumTotal = 0;
  let lastLine = 0;
  for await (const line of rl) {
    lineNumber++;
    lastLine = getTotalSteps(line);
    console.log(`Line ${lineNumber}: ${line} (${lastLine})`);

    sumTotal += lastLine;
  }

  console.log(`submit ${sumTotal}-${lastLine}`);
}

readFileLineByLine(__dirname + "/input.txt");
