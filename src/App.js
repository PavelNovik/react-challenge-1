import React, { useState } from 'react';

import Form from './components/Form';
import UserList from './components/UserList';
import Modal from './components/Modal';
import './App.css';

const userList = [];

function App() {
  const [users, setUsers] = useState(userList);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [message, setMessage] = useState(``);

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const openModal = () => {
    setIsModalVisible(true);
  };

  const errMessage = (mess) => {
    if (mess) {
      setMessage(['Name', 'The input fields do not be empty.']);
    } else {
      setMessage(['Age', 'The Age can be more then 0.']);
    }
  };

  const addUserDataHandler = (user) => {
    setUsers((prevUser) => {
      return [...prevUser, user];
    });
  };

  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      {isModalVisible && <Modal message={message} onCloseBtn={closeModal} />}

      <Form
        onError={errMessage}
        onInvalidInput={openModal}
        onAddUser={addUserDataHandler}
      />

      <UserList users={users} />
    </div>
  );
}

export default App;
