const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

const PlaceSchema = new Schema({
    placename:String,
    location:String,
    pic:String,
    description:String,
    travelCost: String,
    travelTime:String,
    status:{
        type:String,
        default:"Active"
    },
    placeingNumber: Number,

})
PlaceSchema.plugin(timestamps)
PlaceSchema.index({createdAt: 1, updatedAt: 1})

module.exports = mongoose.model("Place", PlaceSchema)