import React, { Component } from "react";
import ConsoleComponent from "./consoleComponent";
import ThreeComponent from "./threeComponent";
class DesignerComponent extends Component {
  state = {
    color: "fff"
  };
  handleColorChange = color => {
    this.setState({
      color
    });
    console.log(color);
  };
  render() {
    return (
      <center>
        <br />
        <br />
        <div className="banner">Smoking Pistons</div>
        <div width="90%">
          <table>
            <tbody>
              <tr>
                <td valign="bottom">
                  <ConsoleComponent
                    handleColorChange={this.handleColorChange}
                  />
                </td>
                <td valign="bottom">
                  <ThreeComponent color={this.state.color} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <br />
        <div>
          <button id="order">Place Order</button>
        </div>
      </center>
    );
  }
}

export default DesignerComponent;
