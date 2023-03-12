import React, { useState } from 'react';

import Form from './components/Form';
import UserList from './components/UserList';
import Modal from './components/Modal';
import './App.css';

// const userList = [];

function App() {
  // const [users, setUsers] = useState(userList);
  const [users, setUsers] = useState([]);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [error, setError] = useState();

  const closeModal = () => {
    // setIsModalVisible(false);
    setError();
  };
  const openModal = (error) => {
    if (error) {
      setError(['Name', 'The input fields do not be empty.']);
    } else {
      setError(['Age', 'The Age can be more then 0.']);
    }
    // setIsModalVisible(true);
  };

  const addUserDataHandler = (user) => {
    setUsers((prevUser) => {
      return [...prevUser, user];
    });
  };

  return (
    <div className="App">
      {/* {isModalVisible && <Modal message={error} onCloseBtn={closeModal} />} */}
      {error && <Modal message={error} onCloseBtn={closeModal} />}

      <Form onInvalidInput={openModal} onAddUser={addUserDataHandler} />

      <UserList users={users} />
    </div>
  );
}

export default App;
