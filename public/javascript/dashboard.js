import render from './render.js'


const socket = io()
const init = {
    onpageLoad: function (socket) {
        // checking for dashboard url and requesting thread data
        if (window.location.pathname == '/dashboard') {
            // listen for thread data message
           socket.on('threadGranted', function(data){
               render.renderThread(data)
               
           })
        }
    },
}

init.onpageLoad(socket)