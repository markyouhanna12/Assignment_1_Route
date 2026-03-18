const path = require("node:path");

function logFile(){
    const filePath = path.resolve(__filename)
    const dirPath = path.dirname(filePath);
    console.log({File:filePath,Dir:dirPath});
    
}

logFile()