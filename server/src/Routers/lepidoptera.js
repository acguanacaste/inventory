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
const groupCount = {
    _id:"$Herbivore species",
    number:{$sum:1}
}

const options = {
    $sort:{'Herbivore species':1}
};



lepidopteraRouter
    .get('/:voucher', (req,res) =>{
        Lepidoptera.find({'voucher':req.params.voucher},mapProjection,options,(err,lepidoptera) =>{
            res.json(lepidoptera)
        })
    })
    .get('/species/:species', (req,res) =>{
        let species = req.params.species
            .split(",")
            .map(function (sp){
                return {'Herbivore species':sp.trim()}
        });
        console.log(species);
        Lepidoptera.aggregate([
            {
                $match:{
                    $or :species
                }
            },
            {
                $group: {
                    _id:"$Herbivore species",
                    count:{$sum:1},
                    "family":{"$first":"$Herbivore family"},
                    records:{
                        "$push":{
                            voucher: "$voucher",
                            "collectionDate": "$Collection Date",
                            longitude: "$Longitude",
                            latitude: "$Latitude",
                         //   sector:"$Sector"
                        }
                    }
                }
            },
                {$sort:{_id:-1}}
            ]
            ,function (err,lepidoptera) {
                if (err){
                    throw err;
                }else{
                    res.json(lepidoptera)
                }
            }
        );
    })
    .get('/', (req,res) => {
        Lepidoptera.find({},(err,lepidoptera) =>{
            res.json(lepidoptera)
        })
            .limit(1000)
    });

export default lepidopteraRouter
