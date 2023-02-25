import React, { useEffect, useState } from "react";
import Picture from "./components/Picture"
import axios from "axios"


function Album({holidayId}) {
  const API_URL = `http://localhost:3000/api/v1/holidays/${holidayId}`;

  function getAPIData() {
    return axios.get(API_URL).then((response) => response.data)
  }

  const [pictures, setPictures] = useState([])

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setPictures(items.pictures_urls);
      }
    });
    return () => (mounted = false);
  }, [holidayId]);

  const album = pictures.map( (pictureUrl, index) =>
      <Picture key={index} url={pictureUrl} />
  )

  return (
    <div className="album">
      {album}
    </div>
  );
}
export default Album;
