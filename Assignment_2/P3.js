const path = require("node:path")

function buildPath(object){
    return path.format({
        dir : object.dir,
        name : object.name,
        ext : object.ext

    })
}


console.log(buildPath({dir: "/folder", name:"app",ext:".js"}));
