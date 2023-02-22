import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Album from "./pages/Album"
import Navbar from "./pages/components/Navbar"
import Modal from "./pages/components/Modal"

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className={openModal ? "container_2" : "container_1"}>
      <Navbar openModal={setOpenModal} />
      {openModal && <Modal closeModal={setOpenModal}/>}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/album" element={<Album />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
