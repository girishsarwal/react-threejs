import React, { Component } from "react";
import SketchColor from "react-color";
class ConsoleComponent extends Component {
  state = {
    bodyColor: "#f00",
    lightingColor: "#fff"
  };
  handleBodyColorChanged = color => {
    //this.props.handleColorChange(this.state);
  };
  handleLightingColorChanged = color => {
    //this.props.handleColorChange(this.state);
  };

  render() {
    return (
      <div>
        <div>
          <br />
          Bike Color
          <br />
          <br />
          <SketchColor
            color="#337ab7"
            onChangeComplete={this.handleBodyColorChanged}
          />
        </div>
        <br />
        <br />
        <div>
          Lighting
          <br />
          <br />
          <SketchColor
            color="#8e6dc4"
            onChangeComplete={this.handleLightingColorChanged}
          />
        </div>
      </div>
    );
  }
}

export default ConsoleComponent;
