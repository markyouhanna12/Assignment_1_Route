const path = require("node:path")


function joinSegments(...segments){
    return path.join(...segments);
}

console.log(joinSegments("src", "components", "App.js"));
