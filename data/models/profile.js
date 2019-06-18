const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    username: String,
    messages: {post: String, index: String},
    date: Date(),
})

// set schema as mongoose model
const profileModel = mongoose.model('profileSchema', profileSchema, 'profiles');

// export schema
module.exports = profileModel;