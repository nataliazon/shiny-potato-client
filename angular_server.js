// from https://betterprogramming.pub/how-to-deploy-your-angular-9-app-to-heroku-in-minutes-51d171c2f0d

const express = require('express');
const app = express();


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

app.listen(process.env.PORT || 8080);
console.log(" Listen for requests at the PORT specified by env variables or the default Heroku port, which is 8080.");
