import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";
import {
  applyNumber,
  changeOPP,
  clearDisplay,
  memoryDisplay,
  applyMemory,
  clearMemory,
} from "../actions";

import reducer, { initialState } from "../reducers";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const eventHandler1 = () => {
    dispatch(applyNumber(1));
  };

  const eventHandler2 = () => {
    dispatch(applyNumber(2));
  };
  const eventHandler3 = () => {
    dispatch(applyNumber(3));
  };

  const eventHandler4 = () => {
    dispatch(applyNumber(4));
  };

  const eventHandler5 = () => {
    dispatch(applyNumber(5));
  };

  const eventHandler6 = () => {
    dispatch(applyNumber(6));
  };

  const eventHandler7 = () => {
    dispatch(applyNumber(7));
  };

  const eventHandler8 = () => {
    dispatch(applyNumber(8));
  };

  const eventHandler9 = () => {
    dispatch(applyNumber(9));
  };

  const eventHandlerChange = () => {
    dispatch(changeOPP("+"));
  };
  const eventHandlerChange2 = () => {
    dispatch(changeOPP("-"));
  };
  const eventHandlerChange1 = () => {
    dispatch(changeOPP("*"));
  };

  const eventHandlerClear = () => {
    dispatch(clearDisplay(0));
  };

  const eventHandleMemory = () => {
    dispatch(memoryDisplay());
  };

  const eventHandleMemory1 = () => {
    dispatch(applyMemory());
  };

  const eventHandleMemory2 = () => {
    dispatch(clearMemory());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={eventHandleMemory} />
              <CalcButton value={"MR"} onClick={eventHandleMemory1} />
              <CalcButton value={"MC"} onClick={eventHandleMemory2} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={eventHandler1} />
              <CalcButton value={2} onClick={eventHandler2} />
              <CalcButton value={3} onClick={eventHandler3} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={eventHandler4} />
              <CalcButton value={5} onClick={eventHandler5} />
              <CalcButton value={6} onClick={eventHandler6} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={eventHandler7} />
              <CalcButton value={8} onClick={eventHandler8} />
              <CalcButton value={9} onClick={eventHandler9} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={eventHandlerChange} />
              <CalcButton value={"*"} onClick={eventHandlerChange1} />
              <CalcButton value={"-"} onClick={eventHandlerChange2} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={eventHandlerClear} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
