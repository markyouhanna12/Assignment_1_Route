const os = require("node:os")

function getSystemData(){
    return {
        Platform : os.platform(),
        Arch : os.arch()
    }
}

console.log(getSystemData());
