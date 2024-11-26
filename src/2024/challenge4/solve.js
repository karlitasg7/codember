const { getNodes } = require("./index");
const fs = require("fs");
const readline = require("readline");

async function readFileLineByLine(filePath) {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let lineNumber = 0;
  let result = "";
  for await (const line of rl) {
    lineNumber++;
    result = getNodes(line);
    console.log(`Line ${lineNumber}: (${result})`);
  }

  const test = result.split(",");
  console.log("total nodes", test.length);

  console.log(`submit ${result}`);
}

readFileLineByLine(__dirname + "/input.txt");
