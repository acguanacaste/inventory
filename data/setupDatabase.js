db = db.getSiblingDB('inventory');
db.aereo.find({});
//add album code
db.aereo.updateMany({},
    {$set:{ "album":"1"}}
);
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
