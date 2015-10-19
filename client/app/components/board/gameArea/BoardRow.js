import React from "react";

class BoardRow extends React.Component{
  constructor(props){
    super(props)
  }

  pointSymbol() {
      if (this.props.cards.mobs && this.props.role != "hand") {
        let points = this.props.cards.mobs.map(v => v.point).reduce((a,c,i,arr) => a + c);
        if (points > 0) return (<div className="point">{points}</div>)
      }
  }

  getCards(type) {
    if (this.props.cards[type]) {
      return this.props.cards[type].map(c => {
        return(<img className="card" src={c.img} alt={c.name} />)
      })
    }
  }

  magicCol() {
    if (this.props.role != "hand") return (<div className="magic">{this.getCards("magic")}</div>)
  }

  render(){
    return(
      <div className={`${this.props.role}-row`}>
        {this.pointSymbol()}
        {this.magicCol()}
        <div className="mobs">
          {this.getCards("mobs")}
        </div>
      </div>
    )
  }
}

export default BoardRow;
