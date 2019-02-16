let ls = require("./ls").list;
function repl(data,callback){
    switch (data) {
        case "ls\n":
            ls();
            break;

        default:
            console.log("Incorrect input :(");
            break;
    }
}

module.exports.repl = repl;