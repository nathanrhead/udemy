import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>  (
  <Modal
    isOpen={!!props.selectedOption}
    // onAfterOpen={afterOpenModal}
    // style={customStyles}
    onRequestClose={props.close} // Handles the escape key and clicking outside the modal.
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.close}>Okay</button>
  </Modal>
);

export default OptionModal;
