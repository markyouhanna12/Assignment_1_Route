const path = require("node:path")

function getNameAndExt(filePath){
    const parsedPath = path.parse(filePath);
    return {
        Name : parsedPath.name,
        Ext : parsedPath.ext
    }
}

console.log(getNameAndExt("/home/app/main.js"));
