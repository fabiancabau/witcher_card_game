// BASE SETUP
// =================================================================

var express = require('express');

var app = express();

var server = require('http').Server(app);
var port = process.env.PORT || 1111;

var Cards = require('./Cards');
var Board = require('./Board');
var Player = require('./Player');
var Deck = require('./Deck');
var Game = require('./Game');

let c = 'SoldierCard'

let p1 = new Player('aaa', 'ajwdjaw2', new Deck([new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c]]));
let p2 = new Player('bbb', 'ajwdjawi3', new Deck([new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c]]));

let g = new Game(p1, p2);
p1.placeCard(g.board, p1.hand[0], 'MID');

console.log(g.board);


app.listen(port, function(){
  console.log('Server listening on port ' + port);
});
