import React from "react";
import "../App.css";
import ShowFood from "./ShowFood";
import Categories from "./Categories";
import FoodForm from "./FoodForm";

class FoodList extends React.Component {
  state = {
    categoryDisplay: "",
    newFood: "",
    chooseCategory: "American",
    foods: [],
  };

  componentDidMount() {
    fetch("http://localhost:9292/FoodList", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      //   .then((data) => console.log("this is data", data))
      .then((data) => this.setState({ foods: data.fav_foods }));
  }

  handleClick = (event) => {
    event.target.innerText === "All"
      ? this.setState({ categoryDisplay: "" })
      : this.setState({ categoryDisplay: event.target.innerText });
  };

  handleDelete = (deleteFood) => {
    fetch("http://localhost:9292/FoodList/" + deleteFood.id, {
      method: "DELETE",
    });

    this.setState({
      foods: this.state.foods.filter((food) => food !== deleteFood),
    });
  };

  handleAddFood = (e) => {
    e.preventDefault();
    if (this.state.newFood.length > 0) {
      fetch("http://localhost:9292/FoodList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.newFood,
          category: this.state.chooseCategory,
        }),
      })
        .then((res) => res.json())
        .then((addedFood) => {
          console.log("this is addedFood", addedFood);
          this.setState({
            // will be looking for the symbol specified/created on line 28 in application.rb
            foods: [...this.state.foods, addedFood.fav_food],
            newFood: "",
          });
        });
    }
  };

  inputHandleOnChange = (e) => this.setState({ newFood: e.target.value });
  selectHandleOnChange = (e) =>
    this.setState({ chooseCategory: e.target.value });

  render() {
    let filterFoods = this.state.foods.filter((food) =>
      food.category.includes(this.state.categoryDisplay)
    );

    return (
      <div className="App">
        <h2>My Favorite Street Foods</h2>
        <Categories handleClick={this.handleClick} />
        <div className="foods">
          <br />
          <h5>enter your favorite street foods</h5>
          <FoodForm
            inputHandleOnChange={this.inputHandleOnChange}
            inputValue={this.state.newFood}
            selectHandleOnChange={this.selectHandleOnChange}
            inputHandleAddFood={this.handleAddFood}
          />
          <br />
          {filterFoods.map((food, i) => (
            <ShowFood key={i} food={food} handleDelete={this.handleDelete} />
          ))}
        </div>
      </div>
    );
  }
}

export default FoodList;
