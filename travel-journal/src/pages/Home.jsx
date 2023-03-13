import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import axios from 'axios'

const API_URL = "http://localhost:3000/api/v1/holidays";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function Home(props) {
  const [holidays, setHolidays] = useState([])

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setHolidays(items);
      }
    });
    return () => (mounted = false);
  }, []);

  const card = holidays.map( item =>
    <Card
      holidayId={props.changeHolidayId}
      key={item.id}
      {...item}
    />
  )

  return (
      <div className="container--nav">
        <Navbar  openModal={props.openModal} />
        <section className="cards-section">
          {card.reverse()}
        </section>
      </div>
  );
}

export default Home;
