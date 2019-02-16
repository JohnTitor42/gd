let process = require('process');
let stdinp = process.stdin;
let Dir = require('../secr/dir.json');
let repl = require("./repl").repl;

stdinp.setEncoding('utf-8');
let pwd = function () {
  process.stdout.write(
    Dir.username + '@' + Dir.machine + ':~/' + Dir.currDir + '$ '
  );
}

function CLI(data) {
  repl(data);
}

let stdin = function (data) {
  pwd();
  stdinp.once('data', function (data) {
    if (data === 'exit\n') {
      console.log('User input complete, program exit.');
      process.exit();
    } else {
      CLI(data);
    }
  });
}

module.exports.stdin = stdin;
