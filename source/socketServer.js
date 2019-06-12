const fs = require('fs')

// Declare socket api



////////// SOCKET IO CODE //////////
// setup socket.io
const serverSocket = function(io){
    io.on('connection', function (socket) {
        console.log('a user connected');
        console.log('socket.id = ' + socket.id)


        // Send user disconnected log + socket.id
        socket.on('disconnect', function () {
            console.log('user disconnected');
            console.log('socket.id = ' + socket.id);

        });

        // catch maak een nieuwe oproep van de client
        socket.on('nieuweOproep', function(data){
            console.log(data)
            fs.writeFile('../data/oproepen.json', data, (error)=>{
                if(error) throw error;
                console.log('oproep saved')
            })

        })
}
    )};
    


module.exports = serverSocket;