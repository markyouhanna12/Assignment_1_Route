const fs = require("node:fs");

function checkIfExists(pathName) {
  return fs.existsSync(pathName);
}

console.log(checkIfExists("./notes.txt"));