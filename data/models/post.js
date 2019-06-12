// import Mongoose 
const mongoose = require('mongoose');


// define schema properties
const postSchema= new mongoose.Schema({
    // creator's username
    username: String,

    // description
    description: String,

    // user profile pic
    profilePic: String,
    
    // reactions of other users:
    reactions: Array,

    
    // favorite by user:
    favorites: Array
});

// set schema as mongoose model
const postModel = mongoose.model('postSchema', postSchema, 'posts');

// export schema
module.exports = postModel;


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
getDocuments(postModel)


    function getDocuments(modelName){
        modelName.find({}, function(err, docs){
            if(err){
                console.log(err)
            } else{
                docs.forEach(doc=>{
                    console.log(doc)
                    console.log('_')
                })
            }
        })
    }

    
    
    