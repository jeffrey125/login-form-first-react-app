import React, { useState, useEffect } from 'react';
import Container from './components/UI/Container';
import NewUser from './components/NewUser/NewUser';
import UserList from './components/UserList/UserList';
import ErrorModal from './components/UI/ErrorModal';
import './App.css';

function App() {
  // Logic
  const [data, setData] = useState([]);

  const addUserHandler = userInput => {
    return setData(prevState => [userInput, ...prevState]);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) setData(data);
  }, []);

  useEffect(() => {
    if (data.length > 0) localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const Content =
    data.length === 0 ? (
      <h2 className="text-center font-bold text-4xl m-10">No Users Found!</h2>
    ) : (
      <UserList renderData={data} />
    );

  return (
    <div>
      <Container>
        <NewUser onAddUser={addUserHandler} />
      </Container>
      <Container>{Content}</Container>
    </div>
  );
}

export default App;
