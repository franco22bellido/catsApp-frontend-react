import React from 'react'
import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { getOneCat, saveCat, updateCat } from '../api/cats';
import { useAuth } from '../context/AuthContext';

const CreateCat = () => {
  const {register, handleSubmit, setValue} = useForm();
  const {id} = useParams();
  const {user} = useAuth();
  const navigate = useNavigate();



  const onSubmit = handleSubmit(async (values)=> {
   try {
    if(id){
      await updateCat(id, values, token);
    }
    else{
      await saveCat(values, user.token);

    }
    return navigate("/home");
   } catch (error) {
    console.log(error);
   }
  });

  useEffect(()=> {
    const getTaskIfParamsExist = async()=> {
      if(id){
        try {
          const res = await getOneCat(id, user.token);
          setValue('name', res.data.name);
          setValue('age', res.data.age);
        } catch (error) {
          console.log(error);
          return navigate('/create-cat');
        }
      }
    }
    getTaskIfParamsExist();
  },[])
  
  return (
    <div >
      {
        id ? (<h1>Update cat</h1>) : (<h1>Save cat</h1>)
      }


     <form onSubmit={onSubmit} className="form-control">

     <label htmlFor="exampleFormControlInput1" className="form-label">name</label>
      <input type="text" className='form-control' {...register("name", {required: true})}/>
      {/* {errors.email && (<p>name is required</p>)} */}
      <label htmlFor="exampleFormControlInput1" className="form-label">age</label>
      <input type="number" className='form-control' {...register("age",{required: true, valueAsNumber: true})}/>
      {/* {errors.password && (<p>age is required</p>)} */}
      <button type="submit" className='btn btn-success'>save cat</button>
    </form>
    </div>
  )
}




export default CreateCat