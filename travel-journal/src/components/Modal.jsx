import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faLocationDot, faMapPin, faMapLocationDot, faAddressCard } from "@fortawesome/free-solid-svg-icons";

function Modal({closeModal}) {
  return (
    <div className="modal">
      <div className="modal--container">
        <FontAwesomeIcon className="modal--X" icon={faXmark} onClick={() => closeModal(false)} />
        <h1 className="modal--title">New Location</h1>
        <form className="modal--form">
          <section className="modal--location">
            <label for="title" className="label-glow">
              Title
              <FontAwesomeIcon icon={faMapPin} className="modal--location-icon" />
              <input type="text" id="title" className="input-glow" placeholder="e.g. Liverpool" />
            </label>

            <label for="location" className="label-glow">
              Location
              <FontAwesomeIcon icon={faLocationDot} className="modal--location-icon" />
              <input type="text" id="location" className="input-glow" placeholder="e.g. England" />
            </label>
          </section>
          <section className="modal--google_url">
            <label for="google-url" className="label-glow">
              Google Maps
              <FontAwesomeIcon icon={faMapLocationDot} className="modal--location-icon" />
              <input type="url" id="google-url" className="input-glow" placeholder="https..." />
            </label>
          </section>
          <section className="modal--date">
            <label for="start-date" className="label-glow">
              Start date
              <input type="date" id="start-date" className="input-glow" placeholder="Start date..." />
            </label>

            <label for="end-date" className="label-glow">
              End date
              <input type="date" id="end-date" className="input-glow" placeholder="End date..." />
            </label>
          </section>
          <section className="modal--description">
            <label for="description" className="label-glow">
              Description
              <FontAwesomeIcon icon={faAddressCard} className="modal--location-icon" />
              <input type="text" id="description" className="input-glow" placeholder="Description..." />
            </label>
          </section>
          <section className="">
            <label for="img" className="label-glow">
              Image
              <input type="file" id="img" className="input-glow" placeholder="Image..." />
            </label>
          </section>
          <input type="submit" value="Add Location" className="modal--submit"/>
        </form>
      </div>
    </div>
  )
}

export default Modal;
