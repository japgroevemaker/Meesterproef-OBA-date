const fs = require('fs')
const colors = require('colors')
let data = require('../router/router.js')

const savePost = require('./savePost.js')
console.log(savePost)
// Declare socket api
////////// SOCKET IO CODE //////////
// setup socket.io
const socketServer = function (io) {
    io.on('connection', function (socket) {
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
        })
        
        let oldData = {}
        function getDocuments(modelName){
            modelName.find({}, function(err, docs){
                if(err || !docs){
                    console.log(err.red)
                } else{
                    if(oldData != docs){


                        // unfinished filtering method to clear out undefined values from key-value pairs in retrieved data
                        // console.log(docs.length)
                        // let index = 0
                        // docs.forEach((doc, index)=>{
                        //     for (let [key, value] of Object.entries(doc)){
                        //         if(doc.key == undefined || doc.key == ""){
                        //             console.log('data contained undefined'.red)
                        //         delete docs[index]
                        //         }
                                
                        //     }
                            
                        // })
                        // console.log(docs.length)




                        console.log(` number of documents retrieved: ${docs.length}`.underline.blue)
                        oldData = docs
                        // logging individual docs
                        docs.forEach(doc=>{
                            // console.log(doc)
                        })
                        socket.emit('threadGranted', docs)
                    }
                }
            })
        }
        // Listen for connection query db for them and send data to client
        try{
            data = getDocuments(postModel)
        }
        catch(error){
            if(error){
                console.log(error.red)
            }
        }
    })
};


module.exports = {socketServer};