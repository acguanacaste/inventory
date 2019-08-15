require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
    , Admin = mongoose.mongo.Admin;
const bodyParser = require('body-parser');
const config = require('config');
const http = require('http');
const https = require('https');
const fs = require("fs");
const lepidopteraRouter = require ('./Routers/lepidoptera');

//Express App setup
const app = express();
const port = config.get('server.httpPort');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Connect to Mongo, allow development black password
const user = (config.get('db.user')!=""&&config.get('db.password')!="")?`${config.get('db.user')}:${config.get('db.password')}@`:"";
const mongoUri = `mongodb://${user}${ config.get('db.host')}:${config.get('db.port')}/${config.get('db.database')}`;
let connection = mongoose.connect(mongoUri, { useNewUrlParser: true }, (error) => {
    if (error){
        console.log('Error connecting to database');
        throw error
    }
}).connection;

//Allow cross origins
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Add Routers
app.use('/api/', lepidopteraRouter);

//Set up web server (http + https)
const privateKey = fs.readFileSync( config.get('server.privateKeyPath') );
const certificate = fs.readFileSync( config.get('server.certificatePath') );
const serverConfig = {
    key : privateKey,
    cert: certificate
};

const httpsPort = config.get('server.httpsPort');
const httpPort = config.get('server.httpPort');
let httpsServer = https.createServer(serverConfig, app).listen(httpsPort, function(err){
    console.log("Node.js Express HTTPS Server Listening on Port");
});

let http_server = http.createServer(function(req,res){
    // 301 redirect (reclassifies google listings)
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(httpPort, function(err){
    console.log("Node.js Express HTTP Server Listening on Port ");
});
