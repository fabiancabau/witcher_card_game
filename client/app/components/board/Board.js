import React from "react";
import BoardProfile from "./profileArea/BoardProfile.js";
import BoardRows from "./gameArea/BoardRows.js";
import player1 from "./../../mocks/Player1.mock.js";
import player2 from "./../../mocks/Player2.mock.js";

var mock = {player1 : player1, player2 : player2};

class Board extends React.Component{
  constructor(props) {
    super(props);
    this.mock = mock;
  }

  render(){
    return (
      <div id="game-board">
        <div className="king-col">
          <BoardProfile player={this.mock.player2} />
          <BoardProfile player={this.mock.player1} />
        </div>
        <div className="ornament"></div>
        <div className="game-col">
          <BoardRows games={[this.mock.player1.game, this.mock.player2.game]}/>
          <div className="aux-col"></div>
        </div>
      </div>
    )
  }
}

export default Board;
