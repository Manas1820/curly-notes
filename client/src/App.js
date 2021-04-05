import React from "react";
import "./App.css";
import Notes from "./Notes-pana.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Curly Notes</h1>
        <div>
          <button className="secondary-button">Log in</button>
          <button>Sign up</button>
        </div>
      </div>
      <div className="home">
        <div>
          <h1 className="title">
            Store notes where <br />
            they belong
          </h1>
          <br />
          <p className="subtitle">no more sticky notes here and there</p>
          <br />
          <button>Sign up</button>
        </div>
        <img src={Notes} alt="" width="400px" />
      </div>
    </div>
  );
}

export default App;
