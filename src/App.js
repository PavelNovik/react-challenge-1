import React, { useState } from 'react';
import Card from './components/UI/Card';
import Form from './components/Form';
import UserList from './components/UserList';
import './App.css';

const userList = [];

function App() {
  const [users, setUsers] = useState(userList);
  const addUserDataHandler = (user) => {
    setUsers((prevUser) => {
      return [user, ...prevUser];
    });
    console.log(users);
  };
  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      <Card>
        <Form onAddUser={addUserDataHandler} />
      </Card>
      <Card>
        <UserList />
      </Card>
    </div>
  );
}

export default App;
