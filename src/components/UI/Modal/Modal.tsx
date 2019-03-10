import React from 'react'
import './Modal.css'

interface ModalProps {
    
}
const Modal: React.SFC<ModalProps> = (props) => {
  return (
    <div className="Modal">
      {props.children}
    </div>
  )
}

export default Modal