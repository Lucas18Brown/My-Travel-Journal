import React, { useEffect, useState } from "react";
import lines from "../assets/image 4.png"
import Navbar from "./components/Navbar"
import Picture from "./components/Picture"
import axios from "axios"


function Album(props) {
  const API_URL = `http://localhost:3000/api/v1/holidays/${props.holidayId}`;

  const [pictures, setPictures] = useState([])
  const [holiday, setHoliday] = useState([])

  function getAPIData() {
    return axios.get(API_URL).then((response) => response.data)
  }

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setPictures(items.pictures_urls);
        setHoliday(items.pictures.record);
      }
    });
    return () => (mounted = false);
  }, [props.holidayId]);

  const album = pictures.map( (pictureUrl, index) =>
      <Picture key={index} url={pictureUrl} />
  )

  const albumTitle = holiday.title ? holiday.title.charAt(0).toUpperCase() + holiday.title.slice(1) : ""

  return (
    <div>
      <Navbar  openModal={props.openModal} />
      <div className="album--holiday">
        <div className="album--title">
          <h2 className="album--location">{holiday.location ? holiday.location.toUpperCase() : "" }</h2>
          <h1 className="album--name">{albumTitle}</h1>
          <a className="album--link" href={holiday.google_map_url}>View on Google Maps</a>
          <img className="album--image" src={holiday.image} alt="holiday" />
        </div>
        <div className="border"></div>
        <p className="album--description" style={{backgroundImage: `url(${lines})`}}>{holiday.description}</p>
      </div>
      <main className="album--pictures">
        {album}
      </main>
    </div>
  );
}
export default Album;
