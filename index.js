let ejs = require('ejs');
let bodyParser = require('body-parser');
let PORT = 5555
const router = require('./router/router.js')
let cookieSession = require('cookie-session')

let express = require('express');
let app = express();
let http = require('http').Server(app)

const socketServer = require('./source/socketServer.js')


// middleware
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/', router)


http.listen(PORT)
console.log(`Port ${PORT}`);


let io = require('socket.io')(http)
socketServer(io);
