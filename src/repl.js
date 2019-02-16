let ls = require("./ls").list;
const stdin = require("./stdin");
function repl(data,callback){
    switch (data) {
        case "ls\n":
            ls();
            break;

        default:
            console.log("Incorrect input :(");
            stdin.stdin();
            break;
    }
}

module.exports.repl = repl;