//경고문 띄우고 x

import React from 'react'

interface ModalProps {
  message: string
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal
