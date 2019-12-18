import React from 'react';
import {
  Link
} from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import '../css/modal-video.scss';
import sample from "../thermomix.mp4";


function Index() {
  let [isOpen, setIsOpen] = React.useState(false);

  function closeV() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="video-container">
        <video className="video1" playsInline autoPlay muted loop id="bgvid">
          <source src={sample} type="video/mp4" />
        </video>
      </div>

      <div className="header">
        <h1>Thermomix® does the work so you can make time for what matters most</h1>
        <ul className="actions">
          <ModalVideo channel='youtube' isOpen={isOpen} videoId='kZGYuOSVJ2k' onClose={closeV} />
          <button className='btn1' onClick={openModal}>Video</button>
        </ul>
      </div>
    </div>
  )
}

export default Index;