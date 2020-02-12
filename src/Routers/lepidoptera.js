const express = require('express');
const Lepidoptera = require("../models/lepidoptera");

const lepidopteraRouter = express.Router();
const mapProjection = {
    herbivoreSpecies: 1,
    "voucher": 1,
    "locality": 1,
    "collectionDate": 1,
    "latitude": 1,
    "longitude": 1,
    "herbivoreFamily": 1
};
const familyProjection ={
    "herbivoreFamily": 1,
    "herbivoreSubfamily":1,
};
const options = {
    $sort: {herbivoreSpecies: 1}
};
const dateOptions =  { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute:"numeric" };
let today = new Date();
lepidopteraRouter
    .get('/voucher/:voucher', (req, res) => {
        console.log(today.toLocaleDateString("en-US", dateOptions)," - vocuher");
        Lepidoptera.find({'voucher': req.params.voucher}, mapProjection, options, (err, lepidoptera) => {
            res.json(lepidoptera)
        })
    })
    .get('/species/:species', (req, res) => {
        console.log(today.toLocaleDateString("en-US", dateOptions)," - species");
        let species = req.params.species
            .split(",")
            .map(function (sp) {
                return {herbivoreSpecies: sp.trim()}
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
                            "herb": "$herbivoreSpecies",
                            locality: "$locality",
                        },
                        count: {$sum: 1},
                        "family": {"$first": "$herbivoreFamily"},
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
        console.log(today.toLocaleDateString("en-US", dateOptions)," - root");
        Lepidoptera.find({}, (err, lepidoptera) => {
            let some = {
                message:"elp!",
                lep:lepidoptera
            };
            res.json(some)
        })
            .limit(1000)
    })

    .get('/families/?', (req, res) => {
        console.log(today.toLocaleDateString("en-US", dateOptions)," - families");
        Lepidoptera.aggregate([
                {
                    "$project": familyProjection
                },
                {
                    $group: {
                        _id: {
                            "family": "$herbivoreFamily",
                            "subfamily": "$herbivoreSubfamily"
                        },
                        count:{$sum:1}
                    }
                },
                {
                  $group:{
                      _id:"$_id.family",
                      subfamilies:{
                          $push:{
                              subfamily:"$_id.subfamily",
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

.get('/family/:family',(req,res)=>{
    let family = req.params.family
        .split(",")
        .map(function (fm) {
            return {'herbivoreFamily': fm.trim()}
        });
    Lepidoptera.aggregate([
            {
                $match: {
                    $or:family
                },
            },
            {
                $group: {
                    _id: {
                        "family": "$herbivoreFamily",
                        "subfamily": "$herbivoreSubfamily",
                        "species": "$herbivoreSpecies"
                    },
                    count: {$sum: 1},
                }
            },
            {
                $group: {
                    _id: {
                        "family": "$_id.family",
                        "subfamily": "$_id.subfamily"
                    }
                    ,
                    species: {
                        $push: {"species": "$_id.species", count: {$sum: "$count"}}
                    },
                    countRecords: {$sum: "$count"}
                }

            },
        ],
        function (err, lepidoptera) {
            if (err) {
                throw err;
            } else {

                res.json(lepidoptera)
            }
        }
        )
})

;


module.exports = lepidopteraRouter;
