// import Mongoose 
const mongoose = require('mongoose');


// define schema properties
const postSchema= new mongoose.Schema({
    // tags = Array of String(s)
    tags: [{  type: String }],
    // title of the post
    postName: String,
    // description
    postContent: String,
    // user profile pic = base64Encoded
    profilePic: String,
    // creator's username
    username: String,
    // reactions of other users:
    reactions:  [{  type: String }],
    // favorite by user:
    favorites: String,
    // tijd
    date: String,
    // what activity is the post about?
    activity: String,
});

// set schema as mongoose model
const postModel = mongoose.model('postSchema', postSchema, 'posts');


/////// how to add a single property ---> $set

// postModel.updateOne({
    //     // zoek op:
    //     Symbol: symbol
    // }, {
        //     // verander deze prop:
        //     $set: {
            // newValue}
            //     }
            // )
            
            
            
            
            
            /////// log existing documents (modelName.find)
            //getDocuments(postModel)
            
        

        
            // export schema
    module.exports = postModel;
            
            
            
            
    