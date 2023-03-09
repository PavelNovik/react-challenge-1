// import React, { useState } from 'react';
import Card from './UI/Card';
import styles from './Modal.module.css';
const Modal = (props) => {
  //   const classes = `${styles['modal']} ` + props.className;
  //   const [openModal, setOpenModal] = useState('hide');

  const closeModal = () => {
    props.onCloseBtn();
  };
  const whatIsEvent = (event) => {
    if (event.target.parentElement.className === 'App') closeModal();
  };

  return (
    // <div className={classes}>
    <div className={`${styles['modal']}`} onClick={whatIsEvent}>
      <Card className={`${styles['modal-window']}`}>
        <div
          className={`${styles['modal-header']}`}
        >{`Uncorrect ${props.message[0]} input`}</div>
        <div className={`${styles['modal-body']}`}>{props.message[1]}</div>
        <div className={`${styles['modal-action']}`}>
          <button type="button" onClick={closeModal}>
            Close Modal
          </button>
        </div>
      </Card>
    </div>
  );
};
export default Modal;
