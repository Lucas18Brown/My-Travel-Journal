import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import Picture from "./components/Picture"
import axios from "axios"


function Album(props) {
  console.log(props)
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
        <img className="album--image"src={holiday.image} alt="holiday" />
        <div className="album--title">
          <h1 className="album--name">{albumTitle}</h1>
        </div>
      </div>
      <main className="album--pictures">
        {album}
      </main>
    </div>
  );
}
export default Album;
