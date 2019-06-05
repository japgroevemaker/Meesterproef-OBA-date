let express = require('express');
let ejs = require('ejs');
let bodyParser = require('body-parser');
let socket = require('socket.io')
let PORT = 5555
const router = require('./router/router.js')
let cookieSession = require('cookie-session')
let http = require('http').createServer(express)

let app = express();


// middleware
app.set('view engine', 'ejs');


// app.set('trust proxy', 1); // first trust proxy

// app.use(cookieSession({
//   name: 'session',
//   keys: ['key1', 'key2']
// }))

// // This allows you to set req.session.maxAge to let certain sessions
// // have a different value than the default.
// app.use(function (req, res, next) {
//   req.sessionOptions.maxAge = req.session.maxAge || req.sessionOptions.maxAge
// })

// enter logic to change session max ages
 
app.use(express.static('public'))

app.use('/', router)


app.listen(PORT)
console.log(`Port ${PORT}`);

let io = socket(http);

io.on('connection', function(socket){
  console.log('user connected');
})
