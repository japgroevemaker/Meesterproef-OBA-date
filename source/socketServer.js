const fs = require('fs')
const colors = require('colors')
// // Oba API
// const api = require('../data/api')


const postModel = require('../data/models/post.js')
const savePost = require('./savePost.js')

// Declare socket api
////////// SOCKET IO CODE //////////
// setup socket.io
const socketServer = function (io) {
    io.on('connection', function (socket) {
        // Listen for connection query db for them and send data to client



        console.log('a user connected');
        console.log('socket.id = ' + socket.id)

        // Send user disconnected log + socket.id
        socket.on('disconnect', function () {
            console.log('user disconnected');
            console.log('socket.id = ' + socket.id);
        });

        socket.on('savePost', function (data) {
            console.log('request to save post'.yellow)
            // save post
            savePost(data).then(()=>{
                postModel.find({postName: data.postName}, function(error, doc){
                    if(error){
                        console.log(error)
                    } else{
                        // send post to other clients
                        console.log('------------------------------')
                        socket.broadcast.emit('threadGranted', doc)

                    }

                })
            })
        })

        // // de argumenten voor de api moeten Strings zijn
        // socket.on('apiRequest', function(query, maxLength){
        //     if(!maxLength){
        //         let maxLength = "5"
        //     }
        //     console.log(query)
        //     console.log(maxLength)
        // })

        socket.on('newReaction', function (data) {
            // define reaction object
            let newReactionArray = []
            //console.log(data)
            const newReaction = {
                data: data.data,
                date: data.date
            }


            // find the post and its current reactions
            postModel.findOne({_id:data.id}, (error, doc)=>{
                if(error){console.log(error)}
                else{
                    console.log('test'.yellow)

                    // add these current reactions to the new reaction array
                    doc.reactions.forEach((oldReaction)=>{
                        console.log(oldReaction)
                        newReactionArray.push({oldReaction})
                        console.log('old reaction added')
                        // console.log(newReactionArray)
                    })
                    // add the new reaction to the new reaction array
                    console.log(typeof(newReactionArray))
                    console.log('adding new reacton')
                    console.log(newReactionArray)
                    newReactionArray.push({newReaction})
                }
            }).then(()=>{
                // finally update the post 
                postModel.updateOne({   
                    _id: data.id
                }, {
                    $set: {
                        "reactions": newReactionArray
                    }
                }, function (error, user) {
                    if (error) throw error
                    // console.log(user)
                    console.log(`updated reactions on _id: ${data.id}`.green)
    
                    // retrieve the post again and broadcast it to all other clients 
                    postModel.find({
                        _id: data.id
                    }, function (err, doc) {
                        if (err || !doc) {
                            console.log(err.red)
                        } else {
                            socket.broadcast.emit('updateReaction', doc)
                            console.log('broadCasted Reaction'.gray)
                        }
                    })
    
    
                })

            })
        })

        function getDocuments(modelName) {
            console.log('Retrieving Documents'.yellow)
            modelName.find({}, function (err, docs) {
                if (err || !docs) {
                    console.log(err.red)
                } else {
                    console.log('foundDocuments'.green)
                    // logging individual docs
                    docs.forEach(doc => {
                        // console.log(doc)
                    })
                    socket.emit('threadGranted', docs)

                }
            })
        }
    })
};


module.exports = {
    socketServer
};