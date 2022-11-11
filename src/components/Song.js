import React from "react";

class Song extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>{this.props.songTitle}</h1>
        <img src="./sheetMusic/YetNotIButThroughChristInMeC.jpg"></img>
      </>
    );
  }
}

export default Song;
