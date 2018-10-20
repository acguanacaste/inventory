import express from 'express'
//import Lepidoptera from '../models/lepidopteraModel'
import Lepidoptera from "../models/lepidoptera";
const lepidopteraRouter = express.Router();
const mapProjection = {
    'Collection Date':1,
    'Herbivore family':1,
    'Herbivore species':1,
    'herbivore genus name':1,
    'Herbivore subfamily':1,
    'Latitude':1,
    'Locality':1,
    'Longitude':1,
    'primary ecosystem':1,
    'Sector':1,
    'voucher':1
};

lepidopteraRouter
    .get('/:voucher', (req,res) =>{
        Lepidoptera.find({'voucher':req.params.voucher},mapProjection,(err,lepidoptera) =>{
            res.json(lepidoptera)
        })
    })
    .get('/species/:species', (req,res) =>{
        Lepidoptera.find({'Herbivore species':req.params.species},mapProjection,(err,lepidoptera) =>{
            res.json(lepidoptera)
        })
    })
    .get('/species/:species/:species2', (req,res) =>{
        Lepidoptera.find({ $or :[{'Herbivore species':req.params.species},{'Herbivore species':req.params.species2}] },mapProjection,(err,lepidoptera) =>{
            res.json(lepidoptera)
        })
    })
    .get('/', (req,res) => {
        Lepidoptera.find({},(err,lepidoptera) =>{
            res.json(lepidoptera)
        })
            .limit(1000)
    })



export default lepidopteraRouter