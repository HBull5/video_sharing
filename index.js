const express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('lobby', { newID: uuidv4() });
});

app.get('/room/:roomID', (req, res) => {
	res.render('room', { roomID: req.params.roomID });
});

app.get('/scripts/*', (req, res) => {
	res.sendFile(path.join(__dirname, req.url));
});

app.get('/css/*', (req, res) => {
	res.sendFile(path.join(__dirname, req.url));
});

app.get('*', (req, res) => {
	res.render('404');
});

io.on('connection', socket => {
	socket.on('joinRoom', roomID => {
		socket.join(roomID);
		socket.to(roomID).emit('signal', `signal message`);
	});
});

server.listen(PORT, () => {
	console.log(`Server running at >>> http://localhost:3000/ <<<`);
});
