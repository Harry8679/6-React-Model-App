import React from 'react';
import './Modal.scss';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";



const Modal = ({ onCloseModal }) => {
  return (
    <section className="modal-section --100vh cm" onClick={onCloseModal}>
      <div className="modal --flex-center">
        <div className="modal-content --bg-light --p --card">
          <IoClose
            color="red"
            size={16}
            className="close-icon cm"
            onClick={onCloseModal}
          />

          <div className="modal-head --flex-start">
            <IoMdInformationCircleOutline color="orangered" size={18} />
            <h3 className="--text-p --ml">Do you want to continue?</h3>
          </div>
          <div className="modal-body">
            <p className="--text-sm --mb">
                Among the children of men, there is only one Lord who on Earth where we are has served you with all his heart.
                Name Above All Name, Worthy of our Praises, My heart will sing Our Great is Our God.
            </p>
          </div>
          <div className="modal-footer --flex-end">
            <button className="--btn cm" onClick={onCloseModal}>
              Cancel
            </button>
            <button className="--btn --btn-primary">Proceed</button>
          </div>
        </div>
      </div>
    </section>
    // <section className='modal-section --100vh'>
    //     <div className="modal --flex-center">
    //         <div className="modal-content --bg-light --p --card">
    //             <IoClose color='red' size={16} className='close-icon' />
    //         </div>
    //         <div className="modal-head">
    //             <IoMdInformationCircleOutline color='orangered' size={18} />
    //             <h3>Do you want to continue ?</h3>
    //         </div>
    //         <div className="modal-body">
    //             Among the children of men, there is only one Lord who on Earth where we are has served you with all his heart.
    //             Name Above All Name, Worthy of our Praises, My heart will sing Our Great is Our God.
    //         </div>
    //         <div className="modal-footer">
    //             <button>Cancel</button>
    //             <button>Proceed</button>
    //         </div>
    //     </div>
    // </section>
  )
}

export default Modal;
