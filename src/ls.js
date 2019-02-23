const { google } = require('googleapis');
const jwToken = require('./jwToken').token;
const stdin = require('./stdin');
let drive = google.drive("v3");

function listFiles(fileId){
    drive.files.list({
        auth: jwToken,
        //q: `'${fileId}' in parents`,
        fields: 'files(id, name, mimeType)'
    }, callback);
}

function callback(err, res) {
    if (err) return console.log('The API returned an error: ' + err);
    const files = res.data.files;
    if (files.length) {
        console.log('Files:');
        files.map((file) => {
            console.log(`${file.name}`);
        });
    } else {
        console.log('No files found.');
    }
    stdin.stdin();
}

module.exports.list = listFiles;
