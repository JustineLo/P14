import React from 'react';

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
          <button onClick={onClose}>
            Close
          </button>
      </div>
    </div>
  );
}

export default Modal;
