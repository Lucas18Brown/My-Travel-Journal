import React from "react";
import { useState, useEffect } from "react";
import Card from "./components/Card.jsx"
import Navbar from "./components/Navbar.jsx"
import Modal from "./components/Modal.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'

const API_URL = "http://localhost:3000/api/v1/holidays";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [holidays, setHolidays] = useState([])
  const [openModal, setOpenModal] = useState(false)

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
      key={item.id}
      {...item}
    />
  )

  return (
    <div className="container">
      <Navbar />
      <FontAwesomeIcon className="app--add" onClick={() => setOpenModal(true)}  icon={faPlus} />
      {openModal && <Modal closeModal={setOpenModal}/>}
      <section className="cards-section">
        {card}
      </section>
    </div>
  );
}

export default App;
