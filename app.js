// BASE SETUP
// =================================================================

var express = require('express');

var app = express();

var server = require('http').Server(app);
var port = process.env.PORT || 1111;

var Board = require('./Board');
var Player = require('./Player');
var Deck = require('./Deck');

var cards = {
  SoldierCard: require('./SoldierCard')
}

let c = 'SoldierCard'

let b = new Board(
  new Player('aaa', 20, 'ajwdjawi', new Deck([new cards[c], new cards[c], new cards[c], new cards[c], new cards[c], new cards[c]])),
  new Player('aaa', 20, 'ajwdjawi', new Deck([new cards[c], new cards[c], new cards[c], new cards[c], new cards[c], new cards[c]]))
);

console.log(b.p1.placeCard(b, b.p1.deck.cards[0], 'MID'));


app.listen(port, function(){
  console.log('Server listening on port ' + port);
});
