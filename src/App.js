import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    FontSize: 16
  };
  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          className="MyButton   m-2"
          style={styles[style]}
          key={style}
          onClick={() => ChangeStyle(style)}
          id={style}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          className="m-1"
          style={{
            backgroundColor: color,
            height: 30,
            width: 30,
            border: "2px solid black"
          }}
          key={color}
          onClick={() => ChangeColor(color)}
        />
      );
    });
    function ChangeColor(color) {
      let text = document.getElementById("text");
      text.style.color = color;
    }
    function ChangeStyle(style) {
      let button = document.getElementById(style);
      button.classList.toggle("activated");

      let text = document.getElementById("text");
      if (style == "bold") {
        text.style.fontWeight = text.style.fontWeight == "" ? style : "";
      } else if (style == "underline") {
        text.style.textDecoration =
          text.style.textDecoration == "" ? style : "";
      } else {
        text.style.fontStyle = text.style.fontStyle == "" ? style : "";
      }
    }

    let ChangeFontSize = Size => {
      console.log(Size);
      this.setState({ FontSize: Size });
      let text = document.getElementById("text");

      text.style.fontSize = Size + "px";
    };
    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        Font Size{" "}
        <input
          type="text"
          id="exampleForm2"
          class="form-control"
          style={{
            height: "20px",
            width: "50px",
            margin: "auto",
            marginBottom: "50px"
          }}
          value={this.state.FontSize}
          onChange={event => ChangeFontSize(event.target.value)}
        />
        <div
          class="MyTextArea "
          contentEditable="true"
          id="text"
          style={{ margin: "auto" }}
        ></div>
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
