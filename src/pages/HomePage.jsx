import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { catsRequest } from '../api/auth';
import { deleteCat } from '../api/cats';
import { useAuth } from '../context/AuthContext'

const HomePage = () => {
  const {user} = useAuth();
  const [gatos, setGatos] = useState([]);
  
  const getgatos = async ()=> {
    try {
      const res = await catsRequest(user.token);
      console.log(res.data);
      setGatos(res.data);
     
    } catch (error) {
      console.log(error);
    }
  }
  const deleteCats = async (catId)=> {
    const res = await deleteCat(catId, user.token);

    setGatos(gatos.filter((cat)=> cat.id != catId));

    return console.log(res);
  }
  useEffect(()=> {
     getgatos();
  }, [])


  return (
    
    <div className='container'>

      <section className='row justify-content-center'>
        <h1 className='col-4'>
          Página principal
        </h1>
      </section>
      <section className='row'>
      {
         gatos.map((cat, id)=> (
          <div className='col-4 card'  key={id}>
              <div className='card-body'>
              <p className='card-text'>name: {cat.name}</p>  
              <p className='card-text'>age: {cat.age}</p>  
              
              
              
              <button onClick={()=> {
                return deleteCats(cat.id);
              }} className='btn btn-danger'>delete</button>
              <a href={`update/${cat.id}`} className='btn btn-warning'>update</a>
              
              </div>
            </div>
       
         ))
      }
      </section>
    </div>
  )
}

export default HomePage