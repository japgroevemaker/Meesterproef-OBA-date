let socket = io()
socket.emit('request')


// maak een nieuwe oproep
const socketEmit = {
    nieuweOproep: function(data){
    socket.emit('nieuweOproep', data)
    console.log('new socket event has been send')
    }
}

export default socketEmit;