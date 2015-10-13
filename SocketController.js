'use strict'

export default class SocketController {
    constructor(io) {
        this.io = io;
    }


    startListener() {
	    this.io.on('connection', function (socket) {
	  		socket.emit('connected', { msg: 'helloworld!' });

		 	socket.on('connected-ack', function (data) {
		    	console.log(data);
		  	});

			socket.on('game-start', function (data) {
			 	io.sockets.emit('game-start', {});
			});

			socket.on('draw-card', function (player) {
			  	
			});

			socket.on('click',function (data){
			    console.log(data);

			    io.sockets.emit('click-ack', data);
			});
		});
	}



    
}

module.exports = SocketController;