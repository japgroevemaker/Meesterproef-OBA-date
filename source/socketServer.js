const fs = require('fs')
const colors = require('colors')

const postModel = require('../data/models/post.js')
const reactionModel = require('../data/models/reaction.js')
const savePost = require('./savePost.js')

// Declare socket api
////////// SOCKET IO CODE //////////
// setup socket.io
const socketServer = function (io) {
    io.on('connection', function (socket) {
        // Listen for connection query db for them and send data to client
        try{
            getDocuments(postModel)
postModel.find({}, function(error, docs){
    docs.forEach(doc=>{
        socket.emit('updateReaction', doc)
    })
})
}
        catch(error){
            if(error){
                console.log(error.red)
            }
        }
        console.log('a user connected');
        console.log('socket.id = ' + socket.id)
        
        // Send user disconnected log + socket.id
        socket.on('disconnect', function () {
            console.log('user disconnected');
            console.log('socket.id = ' + socket.id);
        });
        
        socket.on('savePost', function (data) {
            console.log('request to save post'.yellow)
            savePost(data)
            socket.broadcast.emit('threadGranted', data)
        })
        
        socket.on('newReaction', function(data){

            
            postModel.updateOne({
                _id: data.id 
            }, {
                $set: { 
                  "reactions":  data.data
                }}, function (error, user) {
                  if (error) throw error
                  console.log(user)
                  console.log(`updated reactions on _id: ${data.id}`.green)

                  postModel.find({_id: data.id}, function(err, doc){
                      if(err || !doc){
                          console.log(err.red)
                        } else{
                            socket.broadcast.emit('updateReaction', doc)
                            console.log('broadCasted Reaction'.gray)
                      }
                    })

                    
                })
            })
        
            function getDocuments(modelName){
            console.log('Retrieving Documents'.yellow)
            modelName.find({}, function(err, docs){
                if(err || !docs){
                    console.log(err.red)
                } else{
                    console.log('foundDocuments'.green)
                        // logging individual docs
                        docs.forEach(doc=>{
                            // console.log(doc)
                        })
                        socket.emit('threadGranted', docs)
                    
                }
            })
        }
    })
};


module.exports = {socketServer};