import React, { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
import './NewUser.css';

const NewUser = props => {
  const [user, setUser] = useState('');
  const [age, setAge] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalError, setModalError] = useState({});

  const inputUser = e => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setUser(e.target.value);
  };

  const inputAge = e => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }

    setAge(e.target.value);
  };

  const submitUserHandler = e => {
    e.preventDefault();
    if (
      user.trim().length === 0 ||
      age.trim().length === 0 ||
      +age <= 0 ||
      +age > 100
    ) {
      setIsValid(false);
      setShowModal(true);
      setModalError({
        title:
          (user.trim().length === 0 && age.trim().length === 0) ||
          (+age > 0 && +age <= 100)
            ? 'Empty Input'
            : 'Invalid Age',
        message:
          (user.trim().length === 0 && age.trim().length === 0) ||
          (+age > 0) & (+age <= 100)
            ? 'Please Type a Valid Input!'
            : 'Please Type a Valid Age (Must be 1-100)',
      });
      return;
    }

    const userData = { id: Math.random(), user: user, age: +age };

    props.onAddUser(userData);

    setUser('');
    setAge('');
  };

  // Conditional Styling
  const errorUser = isValid
    ? 'border-neutral-400'
    : 'border-red-400 animate-shake';
  const errorAge = isValid
    ? 'border-neutral-400'
    : 'border-red-400 animate-shake';
  const errorPlaceholder = isValid ? '' : 'Please Input a Valid Username';
  const errorPlaceholderAge = isValid ? '' : 'Please Input a Valid Age';

  return (
    <div>
      <ErrorModal
        showModalError={showModal}
        modalError={modalError}
        hideModalError={() => {
          setShowModal();
        }}
      />
      <form
        className="flex flex-col items-start gap-4 w-full"
        onSubmit={submitUserHandler}
      >
        <label className="text-4xl font-bold">Username:</label>
        <input
          value={user}
          type="text"
          onChange={inputUser}
          className={errorUser}
          placeholder={errorPlaceholder}
        />
        <label className="text-4xl font-bold invalid:border-red-400">
          Age(Years):
        </label>
        <input
          value={age}
          type="number"
          onChange={inputAge}
          className={errorAge}
          placeholder={errorPlaceholderAge}
        />
        <button
          type="submit"
          className="bg-blue-500 w-64 h-20 text-white text-2xl rounded-md hover:bg-blue-600 active:bg-blue-600 focus:outline-none focus:shadow-[inset_0_0_0_4px_rgba(255,255,255,0.6)] transition-all delay-50 duration-300"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default NewUser;
