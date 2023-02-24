import React from "react";
import stickyTape from "../../assets/sticky-tape.png"

function Picture(props) {
  const randomClass = Math.random() < 0.5 ? 'card--sticky_tape_1' : 'card--sticky_tape_2';
  const cardRandomClass = randomClass === 'card--sticky_tape_1' ? "picture--img_2" : "picture--img_1"

  return (
    <div className="picture">
      <img className={randomClass} src={stickyTape} alt="sticky tape" />
      <img className={cardRandomClass} src={props.url} alt="img" />
    </div>
  )
}

export default Picture
