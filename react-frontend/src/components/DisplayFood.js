import React, { Component } from "react";

class DisplayFood extends Component {
  render() {
    return (
      <div className="food">
        <div className="label">{this.props.food.category}</div>
        <div className="text">{this.props.food.text}</div>
        <button
          onClick={() => this.props.handleDelete(this.props.food)}
          className="delete"
        >
          X
        </button>
      </div>
    );
  }
}

export default DisplayFood;
