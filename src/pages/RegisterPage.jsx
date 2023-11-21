import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import {useNavigate} from 'react-router-dom'

const RegisterPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {signUp, isAuthenticated, error: authErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(()=> {
        if(isAuthenticated) navigate("/cats")
    }, [] )
    const onSubmit = handleSubmit(async (values)=> {
        await signUp(values);
    });

  return (
    <div>
      {
        authErrors.map((error, i) => (
          <div key={i}>errores: {error}</div>
        ))
      }
      <form onSubmit={onSubmit}>
        <input type="text" {...register("name", {required: true})} placeholder="name"/>
        {errors.name && (<p>name is required</p>)}
        <input type="text" {...register("email",  {required: true})} placeholder="email"/>
        {errors.email && (<p>email is required</p>)}
        <input type="text" {...register("password",{required: true})} placeholder="password"/>
        {errors.password && (<p>password is required</p>)}
        <button type="submit">Register</button>
            
      </form>
    </div>
  )
}

export default RegisterPage

