import React from "react";
import "../index.css";

class TotalItem extends React.Component {
  render() {
    return (
      <h3 className='totalItem' style={this.props.style}> total found {this.props.totalItems}</h3>
    );
  }
}
export default TotalItem;