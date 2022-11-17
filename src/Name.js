import React, { Component } from "react";
import dog from "./download.jfif"
import "./name.css"
class Name extends Component {
  render() {
    return (
      <div>
        <h1>Arun</h1>
        <h2>Jeevitha</h2>
        <h3>roja</h3>

        <h4>SANJAI</h4>

        <img src={dog}/>
      </div>
    );
  }
}
export default Name