import React from "react";
import "./song.css";

class Song extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.songTitle}</h1>
        <div className="songContainer">
          <img src="./sheetMusic/YetNotIButThroughChristInMe1C.jpg"></img>
          <img src="./sheetMusic/YetNotIButThroughChristInMe2C.jpg"></img>
        </div>
      </div>
    );
  }
}

export default Song;
