import React from "react";
import "./stars.scss";
import clay1 from "../img/Landing imagenew (1).jpg";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
        <div id="home" className="intro route bg-image background">
                <img src={clay1} alt="" className="img-fluid"/>
        </div>
    );
  }
}

export default Intro;
