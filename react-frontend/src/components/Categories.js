import React from "react";
import { CATEGORIES } from "../data";
import "../App.css";

class Categories extends React.Component {
  render() {
    return (
      <div className="categories">
        <h5>filter by category</h5>
        {CATEGORIES.map((category, i) => (
          <ul>
            <li>
              <button
                className="btn btn-warning text-white"
                key={i}
                onClick={this.props.handleClick}
              >
                {category}
              </button>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Categories;
