import React from "react";
import stickyTape from "../../assets/sticky-tape.png"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  const randomClass = Math.random() < 0.5 ? 'card--sticky_tape_1' : 'card--sticky_tape_2';
  const cardRandomClass = randomClass === 'card--sticky_tape_1' ? "card--img_2" : "card--img_1"

  return (
    <div className="card">
      <img className={cardRandomClass} src={props.image} alt="country" />
      <img className={randomClass} src={stickyTape} alt="sticky tape" />
      <div className="card--info">
        <div>
          <div className="card--location">
            <FontAwesomeIcon className="card--location_icon" icon={faLocationDot} />
            <h3>{props.location.toUpperCase()}</h3>
            <a href={props.google_map_url}>View on Google Maps</a>
          </div>
          <Link className="card--a" to={`holidays/${props.id}`} onClick={ () => props.holidayId(props.id) } >
            <h1 className="card--title">{props.title.charAt(0).toUpperCase() + props.title.slice(1)}</h1>
          </Link>
        </div>
        <p className="card--date"><strong>{props.start_date} - {props.end_date}</strong></p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card;
