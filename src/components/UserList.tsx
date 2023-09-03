import React, { useState, useEffect } from "react"
import { useTypedSelectors } from "../hooks/useTypedSelectors"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchUsers } from "../store/action-creator/user"
import type {} from 'redux-thunk/extend-redux'
import { useActions } from "../hooks/useActions"
const UserList:React.FC =()=> {
   // const dispatch = useDispatch()
 const {fetchUsers} =useActions()
   const {users, error, loading}=useTypedSelectors(state=> state.user)
  //  console.log(state)
  useEffect(()=> {
fetchUsers()
  }, [])
  if(loading){
    return <h1>is loading</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }
    return  (
        <div>
{users.map(user=> 
    <div
    key={user.id}
    >
        {user.name}

    </div>
    )}
        </div>
    )
}
export default UserList 