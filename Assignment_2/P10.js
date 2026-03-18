const fs = require("node:fs");
const path = require("node:path");

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(err.message);
      return;
    }

    console.log(`${path.basename(filePath)} is deleted.`);
  });
}

deleteFile("/path/to/file.txt");