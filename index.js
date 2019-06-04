let express = require('express');
let ejs = require('ejs');
let bodyParser = require('body-parser');
let socket = require('socket.io')
let PORT = 5555

let http = require('http').createServer(express)

let app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', function(req, res) {
  res.render("index")
})

app.listen(PORT)
console.log(`Port ${PORT}`);

let io = socket(http);

io.on('connection', function(socket){
  console.log('user connected');
})
