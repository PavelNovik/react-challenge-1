import Card from './components/UI/Card';
import Form from './components/Form';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Card>
        <Form />
      </Card>
      <Card>
        <UserList />
      </Card>
    </div>
  );
}

export default App;
