import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { catsRequest } from '../api/auth';
import { useAuth } from '../context/AuthContext'

const HomePage = () => {
  const {user} = useAuth();
  const [gatos, setGatos] = useNavigate([]);
  
  const getgatos = async ()=> {
    try {
      const res = await catsRequest(user.token);
      setGatos(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=> {
     getgatos();
  }, [])


  return (
    <div>
      {gatos.map((gato, i)=> (
        <div key={i}>{gato}</div>
      ))}
      <h1>
        pagina principal
      </h1>
    </div>
  )
}

export default HomePage
