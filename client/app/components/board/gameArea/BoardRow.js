import React from "react";

class BoardRow extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className={`${this.props.role}-row`}>
        <div className="magic"></div>
        <div className="mobs"></div>
      </div>
    )
  }
}

export default BoardRow;
