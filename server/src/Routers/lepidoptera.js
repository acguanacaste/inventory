import express from 'express'
//import Lepidoptera from '../models/lepidopteraModel'
import Lepidoptera from "../models/lepidoptera";

const lepidopteraRouter = express.Router();
const mapProjection = {
    "Herbivore species": 1,
    "voucher": 1,
    "Locality": 1,
    "Collection Date": 1,
    "Latitude": 1,
    "Longitude": 1,
    "Herbivore family": 1
};

const familyProjection ={
    "Herbivore family": 1,
    "Herbivore subfamily":1,
}
const groupCount = {
    _id: "$Herbivore species",
    number: {$sum: 1}
}

const options = {
    $sort: {'Herbivore species': 1}
};
lepidopteraRouter
    .get('/voucher/:voucher', (req, res) => {
        console.log("vocuher")

        Lepidoptera.find({'voucher': req.params.voucher}, mapProjection, options, (err, lepidoptera) => {
            res.json(lepidoptera)
        })
    })
    .get('/species/:species', (req, res) => {
        console.log("species")

        let species = req.params.species
            .split(",")
            .map(function (sp) {
                return {'Herbivore species': sp.trim()}
            });
        console.log(species);
        Lepidoptera.aggregate([
                {
                    $match: {
                        $or: species
                    }
                },
                {
                    "$project": mapProjection
                },

                {
                    $group: {
                        _id: {
                            "herb": "$Herbivore species",
                            locality: "$Locality",
                        },
                        count: {$sum: 1},
                        "family": {"$first": "$Herbivore family"},
                        "data": {"$push": "$$ROOT"}
                    }
                },
                {
                    $group: {
                        _id: "$_id.herb",
                        count: {$sum: "$count"},
                        data: {
                            "$push": {
                                "k": "$_id.locality",
                                "v": "$data",

                            }
                        }
                    }
                },
                {
                    "$addFields": {
                        "data": {"$arrayToObject": "$data"}
                    }
                },
                {
                    $sort: {
                        _id: 1
                    }
                }
            ]
            , function (err, lepidoptera) {
                if (err) {
                    throw err;
                } else {

                    res.json(lepidoptera)
                }
            }
        );
    })//species

    .get('/', (req, res) => {
        console.log("root");
        Lepidoptera.find({}, (err, lepidoptera) => {
            res.json(lepidoptera)
        })
            .limit(1000)
    })

    .get('/family/', (req, res) => {
        Lepidoptera.aggregate([
                {
                    "$project": familyProjection
                },
                {
                    $group: {
                        _id: {
                            "family": "$Herbivore family",
                            "subfamily": "$Herbivore subfamily"
                        },
                        count:{$sum:1}
                    }
                },
                {
                  $group:{
                      _id:"$_id.family",
                      subfamilies:{
                          $push:{
                              sufamily:"$_id.subfamily",
                              count:{$sum:"$count"}
                          }
                      },
                      count:{$sum:"$count"}
                  },
                },
                {
                    $sort:{_id:1}
                }
            ],
            function (err, lepidoptera) {
                if (err) {
                    throw err;
                } else {

                    res.json(lepidoptera)
                }
            }
        )//aggregate
    })

;


export default lepidopteraRouter
