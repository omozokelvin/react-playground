import AddUser from 'components/Users/AddUser';
import UsersList from 'components/Users/UsersList';
import { useState } from 'react';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevValue) => {
      return [
        ...prevValue,
        {
          id: Math.random().toString(),
          name,
          age,
        },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />

      <UsersList users={usersList} />
    </div>
  );
};

export default App;
