// BASE SETUP
// =================================================================

var express = require('express');

var app = express();

var server = require('http').Server(app);
var port = process.env.PORT || 1111;



var SoldierCard = require('./SoldierCard');
let c = new SoldierCard('Soldier', 'Yellow', 20, 'CREATURE_SOLDIER');

console.log(c);


app.listen(port, function(){
  console.log('Server listening on port ' + port);
});
