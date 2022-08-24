const mongoose = require('mongoose')

const Dishes = require('./models/dishes')


const url = 'mongodb://localhost:27017/conFusion'
const connect = mongoose.connect(url)

connect.then((db) => {
    console.log('Connected correctly to the server')

    Dishes.create({
        name: 'TonyPizza',
        description: 'test'
    })    
        .then((dish) => {
            console.log('dish',dish)
            return Dishes.find({}).exec();
        })
        .then((dishes) => {
            console.log('dishes=', dishes)
            return Dishes.deleteMany({})
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log('error=',err)
        })
});