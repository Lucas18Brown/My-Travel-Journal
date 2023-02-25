import React from "react";
import stickyTape from "../../assets/sticky-tape.png"

function Picture(props) {
  const randomClass = Math.random() < 0.5 ? 'picture--sticky_tape_1' : 'picture--sticky_tape_2';
  const pictureRandomClass = randomClass === 'picture--sticky_tape_1' ? "picture--img_2" : "picture--img_1"

  return (
    <div className="picture">
      <img className={pictureRandomClass} src={props.url} alt="img" />
      <img className={randomClass} src={stickyTape} alt="sticky tape" />
    </div>
  )
}

export default Picture
