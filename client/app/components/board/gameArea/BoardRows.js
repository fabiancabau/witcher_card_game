import React from "react";
import BoardRow from "./BoardRow.js";
import ObjectUtil from "./../../../utils/ObjectUtil.js";

class BoardRows extends React.Component{
  constructor(props) {
    super(props);
  }

  isMainPlayer(g) {
    if (g.hand) {
      let aux = g.hand;
      delete g.hand;
      g = ObjectUtil.reverse(g);
      g.hand = aux;
    }

    return g
  }

  render(){
    return(
      <div className="board-rows">
        {this.props.games.reverse().map(g => {
            let num = g.hand ? 1 : 2;
            g = this.isMainPlayer(g);

            return(
              <div id={`player-gamerows-${num}`}>
                {Object.keys(g).map(k => {
                  return(<BoardRow role={k} />);
                })}
              </div>
            )
        })}
      </div>
    )
  }
}

export default BoardRows;
