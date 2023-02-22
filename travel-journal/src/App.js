import React from "react";
import { useState } from "react";
import travelData from "./data.js";
import Card from "./components/Card.jsx"
import Navbar from "./components/Navbar.jsx"
import Modal from "./components/Modal.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [openModal, setOpenModal] = useState(false)

  console.log(travelData)
  const card = travelData.map( item =>
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
