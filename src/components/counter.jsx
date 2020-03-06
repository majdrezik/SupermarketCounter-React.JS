import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  /*event handler, this keyword isn't defined here
    so we either use the bind method in the constructor or
    we use the arrow function (arrow functions are inhereted, they can use this keyword)
    every event handler should be bined or used as an arrow function.

    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    
  */
  handleIncrement = () => {
    this.state.count++;
    console.log("Increment clicked!");
  };

  renderTags() {
    if (this.state.tags.length === 0) return "There are no tags!";
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
