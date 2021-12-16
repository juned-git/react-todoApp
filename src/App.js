import React, { Fragment, Component } from "react";
import { temporaryArray } from "./Functions";
export let setStateForFunction;

export default class App extends Component {
  state = {
    switchFunctionForButton: null,
    switchFunctionForEnter: null,
  };

  static getDerivedStateFromProps(props, state) {
    return {
      switchFunctionForButton: props.buttonFunction,
      switchFunctionForEnter: props.inputFunction,
    };
  }

  render() {
    const tableCSS = {
      borderCollapse: "collapse",
    };
    const listheadCSS = {
      backgroundColor: "pink",
      color: "brown",
      align: "center",
      border: "1px solid black",
    };
    const buttonCSS = {
      cursor: "pointer",
    };
    return (
      <Fragment>
        <input
          className="inputField"
          placeholder="Add Notes..."
          onKeyUp={this.state.switchFunctionForEnter}
        />
        <button
          onClick={this.state.switchFunctionForButton}
          className="btn"
          style={buttonCSS}
        >
          Add
        </button>
        <br />
        <br />
        <table style={tableCSS}>
          <thead>
            <tr>
              <td colSpan="3" style={listheadCSS}>
                TODO LIST...
              </td>
            </tr>
          </thead>
          <tbody className="tableBody">{temporaryArray}</tbody>
        </table>
      </Fragment>
    );
  }
}
