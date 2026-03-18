const path = require("node:path")


function checkPath(filePath){
    return path.isAbsolute(filePath)
}


console.log(checkPath('/home/user/file.txt'))