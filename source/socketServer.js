const fs = require('fs')

// Declare socket api
const postModel = require('../data/models/post')

postObject = {
    socket: '',
    postArray: [],
}

////////// SOCKET IO CODE //////////
// setup socket.io
const serverSocket = function (io) {
    io.on('connection', function (socket) {
        console.log('a user connected');
        console.log('socket.id = ' + socket.id)


        // Send user disconnected log + socket.id
        socket.on('disconnect', function () {
            console.log('user disconnected');
            console.log('socket.id = ' + socket.id);

        });

        // catch maak een nieuwe oproep van de client
        socket.on('nieuweOproep', function (data) {
            console.log(data)
            fs.writeFile('../data/oproepen.json', data, (error) => {
                if (error) throw error;
                console.log('oproep saved')
            })

        })


        // listen for input message from client
        socket.on('input', function (input) {
            if (postObject.socket === '') {
                postObject.socket = socket.id
            }
            // push input to the sockets data object
            postObject.postArray.push(input)
            console.log(postObject)
            console.log(postObject.postArray.length)


            //         const newPost = new postModel({
            // username: ''
            // description: String,
            // profilePic: String,
            // reactions: Array,
            // favorites: Array,
            // tags: Array,
            // date: String,
            //         })

        })


        // when the user clicks POST button to POST
        socket.on('postRequest', function(){
            console.log('posting ' + postObject.postArray[1])

        })

        // send back input data
        socket.on('askData', function(){

            console.log('------------------------')
            console.log(postObject)
            postObject.postArray[postObject.postArray.push({name: 'time', data: Date()})]
            socket.emit('emitData', postObject)
            postObject.postArray = []

        })
    })
};


module.exports = serverSocket;
