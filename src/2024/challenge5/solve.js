const { getValidNumbers } = require("./index");
const fs = require("fs");
const readline = require("readline");

async function readFileLineByLine(filePath) {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let lineNumber = 0;

  let lastLine = "";
  for await (const line of rl) {
    lineNumber++;
    lastLine = getValidNumbers(line);
    console.log(`Line ${lineNumber}: ${line} (${lastLine})`);
  }

  const response = lastLine.split(",");

  console.log(
    `submit ${response.length}-${response.length > 3 ? response[2] : ""}`
  );
}

readFileLineByLine(__dirname + "/input.txt");
