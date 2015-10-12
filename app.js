// BASE SETUP
// =================================================================

var express = require('express');

var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 1111;

var Cards = require('./Cards');
var Player = require('./Player');
var Deck = require('./Deck');
var Game = require('./Game');

let c = 'SoldierCard'

let p1 = new Player('aaa', 'ajwdjaw2', new Deck([new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c]]), 'p1');
let p2 = new Player('bbb', 'ajwdjawi3', new Deck([new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c]]), 'p2');

let g = new Game(p1, p2);
p1.placeCard(g.board, p1.hand[0], 'MID');
p1.placeCard(g.board, p1.hand[0], 'TOP');
p1.placeCard(g.board, p1.hand[1], 'BOT');


console.log('p1 points: ' + g.board.getPlayerPoints('p1'));


app.listen(port, function(){
  console.log('Server listening on port ' + port);
});


io.on('connection', function (socket) {
  socket.emit('connected', { msg: 'helloworld!' });

  socket.on('connected-ack', function (data) {
    console.log(data);
  });

  socket.on('click',function (data){
    console.log(data);

    io.sockets.emit('click-ack', data);
  });
});
