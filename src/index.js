require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
    , Admin = mongoose.mongo.Admin;
const bodyParser = require('body-parser');
var config = require('config');



//Express App setup
const app = express();
const port = config.get('app.port');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Connect to Mongo, allow development black password
const user = (config.get('db.user')!=""&&config.get('db.password')!="")?`${config.get('db.user')}:${config.get('db.password')}@`:"";
const mongoUri = `mongodb://${user}${ config.get('db.host')}:${config.get('db.port')}/${config.get('db.database')}`;
console.log(mongoUri);
var connection = mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if (error){
        console.error('Error connecting to database');
        throw error
    }
})

//Allow cross origins
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Add Routers
const lepidopteraRouter = require ('./Routers/lepidoptera');
const aereoRouter = require ('./Routers/aereo');
app.use('/api/', lepidopteraRouter);
app.use('/api/', aereoRouter);

//Listen on port
app.listen(port, () => {
    console.log(`listening on port ${ port }`);
});
