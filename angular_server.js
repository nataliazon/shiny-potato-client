// from https://betterprogramming.pub/how-to-deploy-your-angular-9-app-to-heroku-in-minutes-51d171c2f0d
// except certificate is required
//
// To generate certificate:
// use C:\Program Files\Git\usr\bin\openssl.exe
// openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
// valid for 365 days


const express = require('express');
const app = express();

const https = require("https");
const fs = require("fs");


const keysDir = "keys/";

// ------
// Redirect all traffic from http to https.

console.log("Redirect all traffic from http to https");

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
app.use(requireHTTPS);

// ------
// Serve our static files.
app.use(express.static('./dist/shinypotato'));
console.log("Serve our static files.");

// ------
// Wait for a request to any path and redirect all of the requests to index.html
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/shinypotato/'}),
);
console.log("Wait for a request to any path and redirect all of the requests to index.html");

https.createServer({
    key: fs.readFileSync(keysDir + 'key.pem'),
    cert: fs.readFileSync(keysDir + 'cert.pem'),
    passphrase: 'dalek'
}, app).listen(process.env.PORT || 8080);
console.log(" Listen for requests at the PORT specified by env variables or the default Heroku port, which is 8080.");
