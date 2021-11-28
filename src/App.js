import Wrapper from 'components/Helpers/Wrapper';
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
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />

      <UsersList users={usersList} />
    </Wrapper>
  );
};

export default App;
