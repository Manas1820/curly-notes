import React from "react";
import Header from "./components/header";
import "./App.css";
import Notes from "./assets/images/Notes-pana.png";

function Home() {
  return (
    <div>
      <Header />
      <div className="content">
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

export default Home;
