'use strict'

let c = 'SoldierCard';
var Cards = require('./Cards');
var Player = require('./Player');
var Deck = require('./Deck');
var Game = require('./Game');

var g = new Game();

export default class SocketController {
    constructor(io) {
        this.io = io;
    }

    startListener() {
	    this.io.on('connection', function (socket) {

        var p = new Player('aaa', 'ajwdjaw2', new Deck([new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c]]), 'p1');
        if (g.addPlayer(p)) {
            socket.emit('connected', { hand: p.hand });
        }

			  socket.on('game-start', function (data) {
			 	    io.sockets.emit('game-start', {});
			  });

			  socket.on('draw-card', function (player) {

			  });

			  socket.on('click',function (data){
			      console.log(data);

			      io.sockets.emit('click-ack', data);
			  });

        socket.on('play-card', function (data) {
            p.placeCard(g.board, p1.hand[data.card_pos], data.row);
            console.log(g.board);
        });

		  });
	}




}

module.exports = SocketController;
