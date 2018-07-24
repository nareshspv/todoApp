import React, { Component } from "react";

class Wish extends Component {
  render() {
    return <div>{this.props.names.map(name => <h1>hello {name}</h1>)}</div>;
  }
}

export default Wish;
