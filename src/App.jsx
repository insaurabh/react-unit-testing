// import Register from "./components/register/Register"
import {useState} from 'react';
import UserForm from "./components/user/UserForm"
import UserList from "./components/user/UserList";



function App() {

  const [users, setUsers] = useState([]);

  const onUserAdded = (user) => {
    console.log("onUserAdded", user);

    setUsers([
      ...users,
      user
    ]);
  }

  return (
    <>
      <UserForm onUserAdded={onUserAdded} />
      <hr />
      <UserList users={users} />
    </>
  )



}

export default App
