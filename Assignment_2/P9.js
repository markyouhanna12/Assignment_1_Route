const path = require("node:path")

function joinPaths(path1,path2){
    return path.join(path1,path2)

}

console.log(joinPaths("/folder1", "folder2/file.txt"));
