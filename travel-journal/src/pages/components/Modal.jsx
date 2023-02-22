import React, { useState } from "react";
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faLocationDot, faMapPin, faMapLocationDot, faAddressCard } from "@fortawesome/free-solid-svg-icons";

function Modal({closeModal}) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData)

  };


  const handleSubmit = () => {
    axios.post('http://localhost:3000/api/v1/holidays', formData)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="modal">
      <div className="modal--container">
        <FontAwesomeIcon className="modal--X" icon={faXmark} onClick={() => closeModal(false)} />
        <h1 className="modal--title">New Location</h1>
        <form className="modal--form" onSubmit={handleSubmit}>
          <section className="modal--location">
            <label htmlFor="title" className="label-glow">
              Title
              <FontAwesomeIcon icon={faMapPin} className="modal--location-icon" />
              <input type="text" name="title" id="title" className="input-glow" placeholder="e.g. Liverpool" onChange={handleInputChange}/>
            </label>

            <label htmlFor="location" className="label-glow">
              Location
              <FontAwesomeIcon icon={faLocationDot} className="modal--location-icon" />
              <input type="text" name="location" id="location" className="input-glow" placeholder="e.g. England" onChange={handleInputChange}/>
            </label>
          </section>
          <section className="modal--google_url">
            <label htmlFor="google-url" className="label-glow">
              Google Maps
              <FontAwesomeIcon icon={faMapLocationDot} className="modal--location-icon" />
              <input type="url" name="google_map_url" id="google-url" className="input-glow" placeholder="https..." onChange={handleInputChange}/>
            </label>
          </section>
          <section className="modal--date">
            <label htmlFor="start-date" className="label-glow">
              Start date
              <input type="date" name="start_date" id="start-date" className="input-glow" placeholder="Start date..." onChange={handleInputChange}/>
            </label>

            <label htmlFor="end-date" className="label-glow">
              End date
              <input type="date" name="end_date" id="end-date" className="input-glow" placeholder="End date..." onChange={handleInputChange}/>
            </label>
          </section>
          <section className="modal--description">
            <label htmlFor="description" className="label-glow">
              Description
              <FontAwesomeIcon icon={faAddressCard} className="modal--location-icon" />
              <input type="text" name="description" id="description" className="input-glow" placeholder="Description..." onChange={handleInputChange}/>
            </label>
          </section>
          <section className="">
            <label htmlFor="img" className="label-glow">
              Image
              <input type="text" name="image" id="img" className="input-glow" placeholder="Image..." onChange={handleInputChange}/>
            </label>
          </section>
          <input type="submit" value="Add Location" className="modal--submit"/>
        </form>
      </div>
    </div>
  )
}

export default Modal;
