const dotenv = require('dotenv');
dotenv.config();
// Setup empty JS object to act as endpoint for all routes
let projectData = {};

const Port =8081;
const path = require('path');
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');



// Cors for cross origin allowance
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

// test
app.get('/test', (_req, res) => {
    res.send({ success: 'true' });
  });
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Initialize the main project folder
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// post route for /addDataAPI

app.post('/add', function (req, res) {
    projectData = req.body;
    console.log('add')
    console.log(projectData) 
});

app.get('/all', function (req, res) {
    res.send(projectData);
    console.log('all')
    console.log(projectData) 
});

// Setup Server
const server = app.listen(Port, () => {
    console.log("server running");
  console.log(`running on localhost:${Port}`);
})

module.exports = app
