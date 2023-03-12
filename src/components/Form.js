import React, { useState } from 'react';
import Card from './UI/Card';
import Button from './UI/Button';
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

    if (inputName.trim().length === 0) {
      props.onError(true);
      props.onInvalidInput();

      return;
    }
    if (+inputAge < 1) {
      props.onError(false);
      props.onInvalidInput();
      return;
    }
    const newUser = {
      id: Math.random().toString(),
      name: inputName,
      age: inputAge,
    };
    props.onAddUser(newUser);
    setInputName('');
    setInputAge('');
  };

  return (
    <Card className={`${styles['user-form']}`}>
      <form onSubmit={submitHandler}>
        <div className={`${styles['form-input']}`}>
          <label htmlFor="name">Name</label>
          <input
            autoFocus
            type="text"
            id="name"
            value={inputName}
            onChange={changeNameHandler}
          />
        </div>
        <div className={`${styles['form-input']}`}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={inputAge}
            step={1}
            onChange={changeAgeHandler}
          />
        </div>
        <div className={`${styles['form-action']}`}>
          {/* <button type="submit">Add User</button> */}
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};
export default Form;
