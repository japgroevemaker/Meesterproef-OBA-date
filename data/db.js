module.exports = function () {

    const mongoose = require('mongoose')
    const keys = require('../config/keys.js')
    
    ////////// CONNECT TO MONGODB //////////
    mongoose.connect(keys.mongodb.dbURI, {
        useNewUrlParser: true
    }, function (err) {
        if (err) throw err;

        console.log('Connected to DB');

    });

    let db = mongoose.connection;

    // if there is an error connecting to db - log it
    db.on('error', console.error.bind(console, 'connection error:'));
    ///////////////////////////////////////////////////////////////////////


// define db functions:
const addPost = require('./models/addPost')
}