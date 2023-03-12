// import React, { useState } from 'react';
import Card from './UI/Card';
import Button from './UI/Button';
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
    // Можно добавить в один внешний див модальное окно и див бэкдроп на клике на который будет событие закрыть модальное окно
    // <div className={classes}>
    <div className={`${styles['modal']}`} onClick={whatIsEvent}>
      <Card className={`${styles['modal-window']}`}>
        <div
          className={`${styles['modal-header']}`}
        >{`Uncorrect ${props.message[0]} input`}</div>
        <div className={`${styles['modal-body']}`}>{props.message[1]}</div>
        <div className={`${styles['modal-action']}`}>
          <Button type="button" onClick={closeModal}>
            Close Modal
          </Button>
          {/* <button type="button" onClick={closeModal}>
            Close Modal
          </button> */}
        </div>
      </Card>
    </div>
  );
};
export default Modal;
