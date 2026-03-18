const fs = require("node:fs")

function createFolder(folderPath){
    fs.mkdirSync(folderPath);
    console.log("success");
    
}

createFolder("./newFolder")