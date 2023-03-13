import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Album from "./pages/Album"
import Modal from "./pages/components/HolidayModal"

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [ holidayId, setHolidayId ] = useState(1)

  return (
    <div className={openModal ? "container_2" : "container_1"}>
      {openModal && <Modal closeModal={setOpenModal}/>}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home openModal={setOpenModal} changeHolidayId={setHolidayId}/>} />
          <Route exact path={`holidays/${holidayId}`} element={<Album openModal={setOpenModal} holidayId={holidayId} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
