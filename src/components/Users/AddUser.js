import Wrapper from 'components/Helpers/Wrapper';
import Button from 'components/UI/Button';
import ErrorModal from 'components/UI/ErrorModal';
import { useRef, useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);

  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age greater than 0',
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />

          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={ageInputRef} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
