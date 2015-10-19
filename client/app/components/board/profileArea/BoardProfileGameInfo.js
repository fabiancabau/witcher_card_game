import React from "react";

class BoardProfileGameInfo extends React.Component{
  constructor(props){
    super(props)
  }

  generateCrystals(crystal){
    if (crystal > 0) return(<div className="life-crystal"></div>)
    return(<div className="life-crystal null"></div>)
  }

  render(){
    return(
      <div className="game-info">
        <div>
          <span>{this.props.player.name}</span>
          <span>{this.props.player.status}</span>
        </div>
        <div>
          <div className="total-cards">
            <img src="assets/img/board/cards.png" alt="" />
            <span>{this.props.player.handCount}</span>
          </div>
          {this.generateCrystals(this.props.player.crystal - 1)}
          {this.generateCrystals(this.props.player.crystal)}
        </div>
      </div>
    )
  }
}

export default BoardProfileGameInfo;
