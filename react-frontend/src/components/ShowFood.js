import React, { Component } from "react";

class ShowFood extends Component {
  render() {
    return (
      <div className="food">
        <div className="label">
          Food category: {this.props.food.category}
          {"  "}
        </div>
        <div className="text">{this.props.food.name}</div>
        <button
          onClick={() => this.props.handleDelete(this.props.food)}
          className="btn btn-danger"
        >
          Delete food
        </button>
      </div>
    );
  }
}

export default ShowFood;
