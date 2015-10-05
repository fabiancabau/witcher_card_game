// BASE SETUP
// =================================================================

var express = require('express');

var app = express();

var server = require('http').Server(app);
var port = process.env.PORT || 1111;

var SoldierCard = require('./SoldierCard');
var Board = require('./Board');
var Player = require('./Player');
var Deck = require('./Deck');

var cards = {
  SoldierCard: require('./SoldierCard')
}

let c = cards.SoldierCard;

let b = new Board(
  new Player('aaa', 20, 'ajwdjawi', new Deck([new cards.SoldierCard, new cards.SoldierCard, new cards.SoldierCard])),
  new Player('aaa', 20, 'ajwdjawi', new Deck([new cards.SoldierCard, new cards.SoldierCard, new cards.SoldierCard])),
  [], [], [], [], [], []
);


console.log(b.p1.deck.cards[0].name);
b.p1.deck.cards[0].name = 'aaa';
console.log(b.p1.deck.cards[0].name);
console.log(b.p1.deck.cards[1].name);

app.listen(port, function(){
  console.log('Server listening on port ' + port);
});
