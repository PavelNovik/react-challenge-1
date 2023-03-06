import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  const changeNameHandler = (event) => {
    setInputName(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      id: Math.random().toString(),
      name: inputName,
      age: inputAge,
    };
    console.log(newUser);
    props.onAddUser(newUser);
  };

  return (
    <form className={`${styles['user-form']}`} onSubmit={submitHandler}>
      <div className={`${styles['form-input']}`}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={changeNameHandler} />
      </div>
      <div className={`${styles['form-input']}`}>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" step={1} onChange={changeAgeHandler} />
      </div>
      <div className={`${styles['form-action']}`}>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};
export default Form;
