import React, { Component } from "react";
import Counter from "./counter";
import Navbar from "./navbar";

class Counters extends Component {
  render() {
    return (
      /* <button
            className="btn btn-primary btn-sm m-2"
            onClick={this.handleReset}
            >
            Reset
        </button> */

      <React.Fragment>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
