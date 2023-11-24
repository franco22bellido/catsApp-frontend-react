import React from 'react'
import {Navigate, useParams} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { deleteCat } from '../api/cats'
import { useEffect } from 'react'

const DeleteCats = () => {  
  const {user} =  useAuth();
  const {id} = useParams();

  const deleteOne = async ()=> {
    const res = await deleteCat(id, user.token);
    return console.log(res);
  }
  useEffect(()=> {
    deleteOne();
  }, [] );
  return (
    <div>
        <Navigate to={"/home"}></Navigate>
    </div>
  )
}

export default DeleteCats