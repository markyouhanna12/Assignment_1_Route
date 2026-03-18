const fs = require("node:fs");

function writeFile(filePath,content){
    fs.writeFile(filePath,content,"utf-8",(err)=>{
        if (err){
            console.log(err.message);
            return
        }
        console.log("File Written");  

    })
}

writeFile("./async.txt", "Async save")