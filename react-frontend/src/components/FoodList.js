import React from "react";
import "../App.css";
import { CATEGORIES } from "../data";
import DisplayFood from "./DisplayFood";

class App extends React.Component {
  state = {
    categoryDisplay: "",
    newFood: "",
    chooseCategory: "Code",
    foods: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/foods")
      .then((res) => res.json())
      .then((foods) => this.setState({ foods }));
  }

  handleClick = (event) => {
    event.target.innerText === "All"
      ? this.setState({ categoryDisplay: "" })
      : this.setState({ categoryDisplay: event.target.innerText });
  };

  handleDelete = (deleteFood) => {
    fetch("http://localhost:3000/foods/" + deleteFood.id, {
      method: "DELETE",
    });

    this.setState({
      foods: this.state.foods.filter((food) => food !== deleteFood),
    });
  };

  handleAddFood = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: this.state.newFood,
        category: this.state.chooseCategory,
      }),
    })
      .then((res) => res.json())
      .then((addedFood) => {
        this.setState({
          foods: [...this.state.foods, addedFood],
          newFood: "",
        });
      });
  };

  render() {
    let filterFoods = this.state.foods.filter((food) =>
      food.category.includes(this.state.categoryDisplay)
    );

    return (
      <div className="App">
        <h2>My Foods</h2>
        <div className="categories">
          <h5>Category filters</h5>
          {CATEGORIES.map((category, i) => (
            <button key={i} onClick={this.handleClick}>
              {category}
            </button>
          ))}
        </div>
        <div className="foods">
          <h5>foods</h5>
          <form className="new-food-form">
            <input
              onChange={(e) => this.setState({ newFood: e.target.value })}
              placeholder="New food details"
              type="text"
              value={this.state.newFood}
            ></input>
            <select
              onChange={(e) =>
                this.setState({ chooseCategory: e.target.value })
              }
            >
              <option>American</option>
              <option>Mexican</option>
              <option>Asian</option>
              <option>Indian</option>
            </select>
            <input
              onClick={this.handleAddFood}
              type="submit"
              value="Add food"
            ></input>
          </form>
          {filterFoods.map((food, i) => (
            <DisplayFood key={i} food={food} handleDelete={this.handleDelete} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
