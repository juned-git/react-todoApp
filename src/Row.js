import React, { Component } from "react";
import { deleteRow, edit } from "./Functions";
export default class Row extends Component {
  render() {
    const contentCSS = {
      backgroundColor: "cyan",
      border: "1px solid black",
    };
    const deleteCSS = {
      color: "white",
      backgroundColor: "red",
      cursor: "pointer",
      border: "1px solid black",
    };
    const editCSS = {
      color: "white",
      backgroundColor: "green",
      cursor: "pointer",
      border: "1px solid black",
    };
    return (
      <React.Fragment>
        <tr>
          <td style={contentCSS}>{this.props.data}</td>
          <td onClick={deleteRow} style={deleteCSS}>
            Delete
          </td>
          <td onClick={edit} style={editCSS}>
            Edit
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
