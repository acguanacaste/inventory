db = db.getSiblingDB('inventory');
db.aereo.find({});
//add album code
db.aereo.updateMany({},
    {$set:{ "album":"1"}}
);
db.lepidopteras.createIndex({herbivoreSpecies:1});
db.lepidopteras.createIndex({locality:1});
db.lepidopteras.createIndex({herbicoreFamily:1});
db.lepidopteras.createIndex({collectionDate: 1});
db.lepidopteras.createIndex({voucher: 1});

//add location GeoJSON Point
db.aereo.updateMany({},
    {$unset:{location:""}});
db.aereo.find().forEach(function (i)
    {
        db.aereo.update (
            {_id:i._id},
            {$set: {
                    location: {
                        coordinates: [parseFloat(i.longitude),parseFloat(i.latitude)],
                        type: "Point"
                    }
                }
            }
        )
        
    }
);
db.aereo.createIndex({location:"2dsphere"});
db.aereo.createIndex({photoid:1});
db.aereo.createIndex({file:1});
db.aereo.createIndex({year:1});
db.aereo.createIndex({album:1});

db.aereo.find({
    location: {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [-85.549710989,10.8207659433]
            },
            $maxDistance: 1000,
            $minDistance: 10
        }
    }
});
