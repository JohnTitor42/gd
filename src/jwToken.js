const key = require("../secr/credentials.json")
const { google } = require("googleapis")


const jwToken = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ["https://www.googleapis.com/auth/drive"],
    null
);
module.exports.token = jwToken;