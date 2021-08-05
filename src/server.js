const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');


const app = express();



//const router = express.Router();

app.use('/', (req, res) => {
    res.send({"mensaje":"Hellowwww :D"});
});

//app.use(bodyParser.json());


module.exports = app;
module.exports.handler = serverless(app);
