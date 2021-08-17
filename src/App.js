import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  handleOnClick = (event) => {
	  console.log(this.props) //{items: Array(0), increaseCount: ƒ}
    this.props.increaseCount();
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: () => dispatch({ type: "INCREASE_COUNT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
