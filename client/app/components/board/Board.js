import React from "react";
import BoardProfile from "./profileArea/BoardProfile.js";
import BoardRows from "./gameArea/BoardRows.js";

class Board extends React.Component{
  constructor(props) {
    super(props);
    this.mock = {
      player1: {
        name      : "GuiDiego",
        handCount : 8,
        game      : {
          top  : [],
          mid  : [],
          bot  : [],
          hand : [1,2]
        },
        status    : "O manjador infinito do Front-End",
        photo     : "assets/img/players/001.jpg",
        crystal   : 2,
        number    : 1
      },
      player2: {
        name      : "FabianCabau",
        handCount : 5,
        game      : {
          top : [],
          mid : [],
          bot : []
        },
        status    : "Junin do NodeJS",
        photo     : "assets/img/players/002.jpg",
        crystal   : 1,
        number    : 2
      }
    };
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
