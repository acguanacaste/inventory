require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
    , Admin = mongoose.mongo.Admin;
const bodyParser = require('body-parser');
var config = require('config');
const lepidopteraRouter = require ('./Routers/lepidoptera');

//Express App setup
const app = express();
const port = config.get('app.port');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Connect to Mongo, allow development black password
const user = (config.get('db.user')!=""&&config.get('db.password')!="")?`${config.get('db.user')}:${config.get('db.password')}@`:"";
const mongoUri = `mongodb://${user}${ config.get('db.host')}:${config.get('db.port')}/${config.get('db.database')}`;
var connection = mongoose.connect(mongoUri, { useNewUrlParser: true }, (error) => {
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

//Listen on port
app.listen(port, () => {
    console.log(`listening on port ${ port }`);
});
