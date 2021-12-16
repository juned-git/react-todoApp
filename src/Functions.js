import Row from "./Row";
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

export let temporaryArray = [];

let dataArray = [];

//Creating Local Storage
if (localStorage.getItem("storedData") === null) {
  localStorage.setItem("storedData", "[]");
} else dataArray = JSON.parse(localStorage.getItem("storedData"));
//To Have The Content On Refresh
temporaryArray = dataArray.map((item, i) => {
  return <Row data={item} key={i} />;
});

//Function TO Add A Row In Table
export function AddARow() {
  const inputField = document.querySelector(".inputField");

  if (inputField.value !== "") {
    dataArray.push(inputField.value);
    localStorage.setItem("storedData", JSON.stringify(dataArray));

    temporaryArray = dataArray.map((item, i) => {
      return <Row data={item} key={i} />;
    });

    ReactDom.render(
      <App inputFunction={AddARowOnEnter} buttonFunction={AddARow} />,
      document.getElementById("root")
    );

    inputField.value = "";
  }
}

export const AddARowOnEnter = (e) => {
  if (e.key === "Enter") {
    AddARow();
  }
};

export { dataArray };

//To Delete The Row
export const deleteRow = (e) => {
  let rowindex = e.target.parentElement.rowIndex;
  dataArray.splice(rowindex - 1, 1);
  localStorage.setItem("storedData", JSON.stringify(dataArray));

  //Updating temporarayArray
  temporaryArray = dataArray.map((item, i) => {
    return <Row data={item} key={i} />;
  });

  const inputBar = document.querySelector(".inputField");
  inputBar.value = "";
  ReactDom.render(
    <App inputFunction={AddARowOnEnter} buttonFunction={AddARow} />,
    document.getElementById("root")
  );
};

export function functionSwitch() {
  this.setState({
    switchFunctionForButton: this.props.buttonFunction,
  });
  this.setState({ switchFunctionForEnter: this.props.inputFunction });
}

//TO Edit The Row
export const edit = (e) => {
  let rowindex = e.target.parentElement.rowIndex - 1;

  const contentBar = e.target.parentElement.firstElementChild;
  const inputBar =
    e.target.parentElement.parentElement.parentElement.parentElement
      .firstElementChild;

  const button =
    e.target.parentElement.parentElement.parentElement.parentElement
      .firstElementChild.nextSibling;

  function set() {
    dataArray.splice(rowindex, 1, inputBar.value);

    localStorage.setItem("storedData", JSON.stringify(dataArray));
    contentBar.textContent = inputBar.value;
    inputBar.value = "";
    ReactDom.render(
      <App inputFunction={AddARowOnEnter} buttonFunction={AddARow} />,
      document.getElementById("root")
    );
  }
  const setForEnter = (e) => {
    if (e.key === "Enter") {
      set();
    }
  };
  console.log("render");
  ReactDom.render(
    <App inputFunction={setForEnter} buttonFunction={set} />,
    document.getElementById("root")
  );
  button.textContent = "Set";
  inputBar.focus();
  inputBar.value = contentBar.textContent;
};
