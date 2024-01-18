import React from 'react';
import './Modal.scss';
import { IoIosCloseCircleOutline, IoMdInformationCircleOutline } from "react-icons/io";


const Modal = () => {
  return (
    <section className='modal-section'>
        <div className="modal">
            <div className="modal-content">
                <IoIosCloseCircleOutline color='red' size={16} className='close-icon' />
            </div>
            <div className="modal-head">
                <IoMdInformationCircleOutline color='orangered' size={18} />
                <h3>Do you want to continue ?</h3>
            </div>
            <div className="modal-body">
                Among the children of men, there is only one Lord who on Earth where we are has served you with all his heart.
                Name Above All Name, Worthy of our Praises, My heart will sing Our Great is Our God.
            </div>
            <div className="modal-footer">
                <button>Cancel</button>
                <button>Proceed</button>
            </div>
        </div>
    </section>
  )
}

export default Modal;
