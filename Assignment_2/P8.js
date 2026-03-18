const path = require("node:path");

function getAbsolutePath(relativePath){
    return path.resolve(relativePath);
}

console.log(getAbsolutePath("./P8.js"));
