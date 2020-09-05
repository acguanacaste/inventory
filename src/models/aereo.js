const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const aereoModel = new Schema({
  "photoid": String,
  "file": String,
  "title": String,
  "description": String,
  "latitude": String,
  "longitude": String,
  "year": String,
  "album": Number,
  "location": {
    "coordinates": [
        Number
      ]
    ,
    "type": String
    }
  }
    , {strict: false}
    );

module.exports = mongoose.model('aereo', aereoModel);
