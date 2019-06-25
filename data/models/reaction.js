const mongoose = require('mongoose')

const reactionSchema = {
    id: String,
    reactions: [{  type: String }]
}

// set schema as mongoose model
const reactionModel = mongoose.model('reactionSchema', reactionSchema, 'reactions');

module.exports = reactionModel