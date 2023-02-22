import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <img className="card--img" src={props.image} alt="country" />
      <div className="card--info">
        <div>
          <div className="card--location">
            <FontAwesomeIcon className="card--location_icon" icon={faLocationDot} />
            <h3>{props.location.toUpperCase()}</h3>
            <a href={props.google_map_url}>View on Google Maps</a>
          </div>
          <h1 className="card--title">{props.title}</h1>
        </div>
        <p className="card--date"><strong>{props.start_date} - {props.end_date}</strong></p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card;
