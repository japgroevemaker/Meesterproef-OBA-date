const fs = require('fs')
const colors = require('colors')
// Declare socket api
const postModel = require('../data/models/post')
postObject = {
    socket: '',
    postArray: [],
}


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
        
        
        // listen for input message from client
        socket.on('input', function (input) {
            if (postObject.socket === '') {
                postObject.socket = socket.id
            }
            if(input.name === 'username'){
                console.log(input)
            }
            // push input to the sockets data object
            postObject.postArray.push(input)
            
            // console.log(postObject.postArray.length)

        })
        
        // when the user clicks POST button to POST 
        socket.on('postRequest', function () {
            // console.log('posting ' + postObject.postArray[1])
            console.log(postObject)
        })
        
        // send back input data 
        socket.on('askData', function () {
            console.log(postObject)
            console.log(postObject.postArray.length)
        })
        
        // when the user clicks POST button to POST
        socket.on('postRequest', function () {
            console.log('posting ' + postObject.postArray[1])
        })
        
        // send back input data --
        socket.on('askData', function () {
            console.log('------------------------')
            // add timestamp
            postObject.postArray[postObject.postArray.push({
                name: 'time',
                data: Date()
            })]
            // send to the client
            socket.emit('emitData', postObject)
            //console.log(postObject)
            // reset the postArray
            postObject.postArray = []
            
        })
        socket.on('savePost', function (data) {
            console.log('saving post')
            console.log(data.postArray[0].tags)
            const formattedData = {}
            data.postArray.forEach(doc => {
                const dataName = doc.name
                formattedData[dataName] = doc.data
                console.log(formattedData)
            })
            console.log(formattedData.tags)
            
            const newPost = new postModel({
                // tags
                tags: formattedData.tags,
                // title of the post
                postName: formattedData.postName,
                // description
                postContent: formattedData.postContent,
                // user profile pic = base64Encoded
                profilePic: formattedData.imageBase64Encoded,
                // creator's username
                username: formattedData.username,
                // reactions of other users:
                reactions: "",
                // favorite by user:
                favorites: "",
                // tijd
                date: formattedData.time,
            })
            try {
                newPost.save().then((newpost)=>{
                    socket.broadcast.emit('threadGranted', newPost)
                })
    
                console.log('succesfully Saved Post'.green)
            } catch (error) {
                console.log(error)
            }
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