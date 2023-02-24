import React, { useState, useEffect } from "react";
import Card from "./components/Card"
import axios from 'axios'

const API_URL = "http://localhost:3000/api/v1/holidays";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function Home({changeHolidayId}) {
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
      holidayId={changeHolidayId}
      key={item.id}
      {...item}
    />
  )

  return (
      <section className="cards-section">
        {card.reverse()}
      </section>
  );
}

export default Home;
