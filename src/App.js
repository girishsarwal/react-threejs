import React, { Component } from "react";
import ThreeComponent from "./components/threeComponent";
import ConsoleComponent from "./components/consoleComponent";
import logo from "./logo.svg";
import "./App.css";
import DesignerComponent from "./components/designerComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DesignerComponent />
      </div>
    );
  }
}

export default App;
