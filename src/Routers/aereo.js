const express = require ('express');
const Aereo = require("../models/aereo");

const aereoRouter = express.Router();
const mapProjection = {
    _id:1,
    album:1,
    photoid:1,
    file:1,
    title:1,
    description:1,
    latitude:1,
    longitude:1,
    year:1
};
const options = {};

const dateOptions =  { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute:"numeric", second:'numeric'};
let today = new Date();

aereoRouter
    .get('/aereo/allPhotos/?', (req,res) => {
        console.log(today.toLocaleDateString("en-US", dateOptions)," | "+req.url);
        
        Aereo.find({},mapProjection ,options, (err, areialPhotos) => {
            res.json(areialPhotos)
        })
        
    })
    .get('/aereo/photos/:photo', (req,res) =>{
        console.log(today.toLocaleDateString("en-US", dateOptions)," | "+req.url);
        let filter = [];
        if (req.params.photo != undefined){
            filter = req.params.photo
                .split(",")
                .map(function (photo) {
                    return photo.trim()
                });
        }
        Aereo.find({photoid:{$in: filter}},mapProjection ,options, (err, areialPhotos) => {
            res.json(areialPhotos)
        })
        
    })
    .get('/aereo/allAlbums/?', (req,res) => {
        console.log(today.toLocaleDateString("en-US", dateOptions)," | "+req.url);
        
        Aereo.distinct("album",options , (err, areialPhotos) => {
            res.json(areialPhotos)
        })
        
    })
    .get('/aereo/years/:years', (req,res) =>{
        console.log(today.toLocaleDateString("en-US", dateOptions)," | "+req.url);
        let filter = [];
        if (req.params.years != undefined){
            filter = req.params.years
                .split(",")
                .map(function (year) {
                    return year.trim().toString()
                });
        }
        Aereo.find( { year : {$in : filter } },mapProjection ,options, (err, areialPhotos) => {
            res.json(areialPhotos)
        })
        
    })
    .get('/aereo/yearsRange/:start/:end', (req,res) =>{
        console.log(today.toLocaleDateString("en-US", dateOptions),"|"+req.url);
        let filter = {};
        if (req.params.start != undefined && req.params.end != undefined){
            filter.start = req.params.start;
            filter.end = req.params.end;
        }
        Aereo.find( { year : {$gte:req.params.start.toString(), $lte: req.params.end.toString()} },mapProjection ,options, (err, areialPhotos) => {
            res.json(areialPhotos)
        })
        
    })


module.exports = aereoRouter;
