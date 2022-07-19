import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
function App() {

  const [userList, setUserList] = useState([]);
  const onAddUserHandler = (uName, uAge) => {
    setUserList((previousUsers) => {
      return [...previousUsers, { name: uName, age: uAge , id: Math.random().toString()}]
    })

  }
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
