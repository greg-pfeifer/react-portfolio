

import { useState } from 'react'
import './Portfolio.css'

import Modal from './Modal'
import appImages from '../assets/images/appImages'
import appDatabase from '../assets/images/appDatabase'

export default function Portfolio() {

  const [modalActive, setModalActive] = useState(false)
  const [modalContent, setModalContent] = useState(appDatabase)

  const openModal = (id) => {
    setModalContent(
      appDatabase.filter(application => application.title === id)
    )
    setModalActive(true)
  }
  const closeModal = (e) => {
    e.preventDefault()
    setModalActive(false)
  }

  return (
    <>
      {modalActive &&
        <Modal 
        onClose={closeModal} 
        filteredData={modalContent}
        />
      }
      <section id='portfolio' className='portfolio-section'>
        <div className='portfolio-heading'>
          <h1>Projects</h1>
        </div>
        <div className='portfolio-grid'>
          {appImages.map((image) => (
            <div
              key={Math.random()}
            >
              <img
                onClick={e => openModal(e.target.id)}
                id={image.name}
                src={require(`../assets/images/${image.address}`)} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
