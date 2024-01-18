import "./App.scss";
import Modal from "./components/modal/Modal";
import Emarh from './assets/8888.jpg';

const App = () => {
  return (
    <section className="intro-section">
      <div className="intro">
        <img src={Emarh} alt="Emarh" />
        <h1>Let's <span>Create a Modal</span></h1>
        <p>Click the Button below</p>
        <button>OPEN MODAL</button>
      </div>
    </section>
  );
}

export default App;
