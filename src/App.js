import React from "react";
import "./App.css";

const list = [
  "maxim",
  "sergey",
  "ivan",
  "maxim",
  "sergey",
  "ivan",
  "maxim",
  "sergey",
  "ivan",
  "maxim",
  "sergey",
  "ivan",
];

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="inner">
          {list.map((item) => (
            <div className="child">{item}</div>
          ))}
        </div>
      </div>
      <div className="bg"></div>
    </div>
  );
};

export default App;
