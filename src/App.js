import AddUser from 'components/Users/AddUser';
import UsersList from 'components/Users/UsersList';
import { Fragment, useState } from 'react';

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
    <Fragment>
      <AddUser onAddUser={addUserHandler} />

      <UsersList users={usersList} />
    </Fragment>
  );
};
export default App;
