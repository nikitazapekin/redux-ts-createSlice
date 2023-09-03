import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <UserList />

      <TodoList />
    </div>
  );
}

export default App;
// npm i @types/react-redux redux react-redux redux-thunk axios
