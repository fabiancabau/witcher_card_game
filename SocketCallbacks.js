var callbacks = {
    play_card: function (data, p) {
    p.placeCard(p.g.board, p.hand[data.card_pos], data.row);
    console.log(p.g.board);
  }
}


module.exports = callbacks;
