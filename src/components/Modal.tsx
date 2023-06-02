import React from 'react';
import './Modal.css';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

function Modal ({ show, onClose, children }: ModalProps){
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        {children}
        <div className="modal-footer">
          <button onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
