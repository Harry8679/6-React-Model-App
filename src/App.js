import "./App.scss";
import Modal from "./components/modal/Modal";
import Emarh from './assets/8888.jpg';
import { useState } from "react";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClickModal = () => {
    setShowModal(true);
  }

  const closeModal = (e) => {
    if (e.target.classList.contains('cm')) {
      // console.log('Happens close modal');
      setShowModal(false);
    }
  }
  return (
    <>
      <section className="intro-section --100vh --flex-center">
        <div className="intro --center-all">
          <img src={Emarh} alt="Emarh" />
          <h1 className="--text-light --text-md">Let's <span>Create a Modal</span></h1>
          <p className="--text-light --mb2">Click the Button below</p>
          <button className="--btn --btn-secondary" onClick={handleClickModal}>OPEN MODAL</button>
        </div>
      </section>
      {showModal && <Modal onCloseModal={closeModal} />}
    </>
  );
}

export default App;
