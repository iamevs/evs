import React from "react";
import "./stars.css";

class Space extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background banner">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
    );
  }
}

export default Space;