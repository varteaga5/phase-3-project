import React from "react";
import "../App.css";

class FoodForm extends React.Component {
  render() {
    return (
      <form className="new-food-form">
        <input
          onChange={this.props.inputHandleOnChange}
          placeholder="enter food here"
          type="text"
          value={this.props.inputValue}
        ></input>
        <br />
        <br />
        <h5>choose a category</h5>
        <select className="primary" onChange={this.props.selectHandleOnChange}>
          <option>American</option>
          <option>Mexican</option>
          <option>Asian</option>
          <option>other</option>
        </select>
        <br />
        <br />
        <br />
        <input
          className="btn btn-primary"
          onClick={this.props.inputHandleAddFood}
          type="submit"
          value="Add food"
        ></input>
      </form>
    );
  }
}

export default FoodForm;
