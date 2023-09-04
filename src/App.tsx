import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {useAppSelector} from "./hooks/redux"
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { userSlice } from './store/reducers/UserSlice';
import { useDispatch } from 'react-redux';
//import { useAppSelector } from './hooks/redux';
import { useAppDispatch } from './hooks/redux';
function App() {
  //const {} = useSelector((state: RootState)=>state.userReducer.)
 //const {} = useAppSelector(state=>state.)
 const {increment} = userSlice.actions
 const dispatch= useAppDispatch()
 console.log(increment(5))
 const {count}= useAppSelector(state=> state.userReducer)
  return (
    <div className="App">
      <h1>
        {count}
      </h1>
      <button onClick={()=> {
        dispatch(increment(10))
      }}>
        INCREMENT 
    </button> 
    </div>
  );
}

export default App;
//npm  install @reduxjs/toolkit
//npm i react-redux @types/react-redux