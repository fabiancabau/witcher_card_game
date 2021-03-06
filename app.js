'use strict'

// BASE SETUP
// =================================================================
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');


console.log('Listening on port 3000');
server.listen(3000);
var Cards = require('./Cards/Cards');
var SocketController = require('./SocketController');


// let c = 'SoldierCard';

// let p1 = new Player('aaa', 'ajwdjaw2', new Deck([new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c]]), 'p1');
// let p2 = new Player('bbb', 'ajwdjawi3', new Deck([new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c]]), 'p2');

// let g = new Game();
// p1.placeCard(g.board, p1.hand[0], 'MID');
// p1.placeCard(g.board, p1.hand[0], 'TOP');
// p1.placeCard(g.board, p1.hand[1], 'BOT');


// console.log('p1 points: ' + g.board.getPlayerPoints('p1'));
// console.log('p2 points: ' + g.board.getPlayerPoints('p2'));

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/index.html');
});



var socket_controller = new SocketController(io);
socket_controller.startListener();
