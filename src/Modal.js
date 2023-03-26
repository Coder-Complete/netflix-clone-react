import "./Modal.css";

import React from "react";

function Modal(props) {
  return (
    <div className="modal">
      <h1>Modal</h1>
      <button onClick={() => props.setOpenModal(false)}>X</button>
    </div>
  );
}

export default Modal;
