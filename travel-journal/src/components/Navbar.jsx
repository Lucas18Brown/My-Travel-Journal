import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="navbar">
      <FontAwesomeIcon className="navbar--icon" icon={faEarth} />
      <h1 className="navbar--title">Our Travel Journel</h1>
    </div>
  )
}

export default Navbar;
