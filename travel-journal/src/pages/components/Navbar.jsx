import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth, faPlus} from "@fortawesome/free-solid-svg-icons";

function Navbar({openModal}) {
  return (
    <div className="navbar">
      <FontAwesomeIcon className="navbar--icon" icon={faEarth} />
      <h1 className="navbar--title">Our Travel Journel</h1>
      <FontAwesomeIcon className="app--add" onClick={() => openModal(true)}  icon={faPlus} />
    </div>
  )
}

export default Navbar;
