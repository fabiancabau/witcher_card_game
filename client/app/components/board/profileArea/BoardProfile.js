import React from "react";
import BoardProfileGameInfo from "./BoardProfileGameInfo.js";

class BoardProfile extends React.Component{
  constructor(props){
    super(props)
  }

  constructClassName() {return `player player-${this.props.player.number}`}

  render(){
    return(
      <div className={this.constructClassName()}>
        <div className="king-card">
          <div className="king"></div>
        </div>
        <div className="info">
          <div className="profile-img">
            <div></div>
            <img src={this.props.player.photo} alt={this.props.player.name} />
          </div>
          <BoardProfileGameInfo player={this.props.player} />
        </div>
      </div>
    )
  }
}

export default BoardProfile;
