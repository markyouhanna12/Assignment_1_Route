const path = require("node:path")

function getFileExtension(filePath){
    return path.extname(filePath)
}

console.log(getFileExtension("/docs/readme.md"));
