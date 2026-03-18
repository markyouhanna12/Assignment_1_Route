const fs = require("node:fs");
function readFileContent(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  console.log(`the file content => "${content}"`);
}

readFileContent("./notes.txt");