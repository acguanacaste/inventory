import mongoose from 'mongoose'

var config = require('config')
//const mongoUri = `mongodb://${config.get('db.user')}:${config.get('db.password')}@${ config.get('db.host')}:${config.get('db.port')}/${config.get('db.database')}`
//mongoose.connect(mongoUri, {useNewUrlParser: true}).connection
const Schema = mongoose.Schema
const lepidopteraModel = new Schema({

        "voucher": String,
        "adult live wt g": String,
        "Adult voucher fate": String,
        "AMNH code": String,
        "Another para": String,
        "barcode length": String,
        "barcode with N": String,
        "blank1": String,
        "Class": String,
        "Collected group": String,
        "Collected group trait": String,
        "Collection Date": Date,
        "collector": String,
        "continent": String,
        "Country": String,
        "date DNA sample": String,
        "date stamp": Date,
        "Det Herb": Date,
        "Det Host": Date,
        "Det Hyperpara": String,
        "Det Para": String,
        "DHJ Plant Coll": String,
        "DHJPARvoucher": String,
        "DNA sample to": String,
        "dump": String,
        "East": String,
        "Elevation": Date,
        "Entry": Date,
        "forewing length mm": String,
        "Found as": String,
        "fpdes": String,
        "gelatin capsule to whom": String,
        "Herb eclotion date": Date,
        "Herb prep date": Date,
        "Herb pup date": String,
        "Herbivore comment": String,
        "Herbivore family": String,
        "herbivore GenBank ACC": String,
        "herbivore genus name": String,
        "Herbivore sex": String,
        "Herbivore species": String,
        "Herbivore subfamily": String,
        "Herbivore tribe": String,
        "Host family": String,
        "Host species": String,
        "HYPER BIN": String,
        "hyperDHJPARvoucher": String,
        "Hyperparasite family": String,
        "Hyperparasite species": String,
        "Hyperparasite subfamily": String,
        "iden basis herb": String,
        "iden basis host": String,
        "iden basis para": String,
        "immature parts": String,
        "Kingdom": String,
        "Latitude": String,
        "LEP BIN": String,
        "Locality": String,
        "Longitude": String,
        "most recent date NJ tree identified": String,
        "multiple": String,
        "North": String,
        "number within year": Date,
        "Order": String,
        "other voucher number": String,
        "PARA BIN": String,
        "Parasite family": String,
        "parasite genus name": String,
        "Parasite order": String,
        "Parasite species": String,
        "Parasite subfamily": String,
        "Parasite tribe": String,
        "photo": String,
        "Phylum": String,
        "plant nickname": String,
        "primary ecosystem": String,
        "Province": String,
        "pupal live wt g": String,
        "Rearing outcome": String,
        "Scanned photo": String,
        "Search": Date,
        "secondary ecosystem": String,
        "Sector": String,
        "specimen deposited at": String,
        "stage": String,
        "Standard unit": String,
        "Subtribe": String,
        "time stamp": String,
        "type": String,
        "When enter": Date,
        "Who enter data": String,
        "year": Date
    }
    , {strict: false});

export default mongoose.model('lepidoptera', lepidopteraModel)