const express = require('express');
const mongoose = require('mongoose')
    , Admin = mongoose.mongo.Admin;


import bodyParser from 'body-parser'

import lepidopteraRouter from './Routers/lepidoptera'

var config = require('config')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

const mongoUri = `mongodb://${config.get('db.user')}:${config.get('db.password')}@${ config.get('db.host')}:${config.get('db.port')}/${config.get('db.database')}`

var connection = mongoose.connect(mongoUri, { useNewUrlParser: true }, (error) => {
    if (error){
        console.log('Error connecting to database')
        throw error
    }
}).connection


/*connection.on('open', function () {
    connection.db.db.listCollections().toArray(function (err, names) {
        if (err) {
            console.log(err);
        } else {
            console.log(names);
        }

        mongoose.connection.close();
    });
});*/
//connection.on('error', console.error.bind(console, 'connection error:'));

/// create a connection to the DB
/*var connection = mongoose.createConnection(
    mongoUri, {useNewUrlParser: true});*/
/*
connection.on('open', function () {
    // connection established
    new Admin(connection.db).listDatabases(function (err, result) {
        console.log('listDatabases succeeded');
        // database list stored in result.databases
        var allDatabases = result.databases;
        console.log(allDatabases)
    });
});*/




app.use('/api/', lepidopteraRouter)

app.listen(port, () => {
    console.log(`listening on port ${ port }`);
});