'use strict'

let c = 'SoldierCard';
var Cards = require('./Cards/Cards');
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
	   	console.log(socket.id + ' connected');
        var p = new Player('aaa', socket.id, new Deck([new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c], new Cards[c]]));
        if (g.addPlayer(p)) {
            socket.emit('connected', { hand: p.hand, socket_id: socket.id });
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
            p.placeCard(g.board, p.hand[data.card_pos], data.row);
            console.log(g.board);
        });

		  });
	}




}

module.exports = SocketController;
