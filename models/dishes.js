const { model } = require("mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
        },
    description: {
        type: String,
        require: true
    }   
}, {
    timeStamp: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;