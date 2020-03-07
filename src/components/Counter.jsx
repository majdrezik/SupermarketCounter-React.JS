import React, { Component } from "react";

class Counter extends Component {
  /*event handler, this keyword isn't defined here
    so we either use the bind method in the constructor or
    we use the arrow function (arrow functions are inhereted, they can use this keyword)
    every event handler should be bined or used as an arrow function.

    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    
  */

  // renderTags() {
  //   if (this.props.Counter.length === 0) return "There are no tags!";
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}> {tag} </li>
  //       ))}
  //     </ul>
  //   );
  // }

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  render() {
    return (
      <div>
        {/* {console.log(this.props)} */}
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        {/* {this.renderTags()} */}
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
