import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import {useNavigate} from 'react-router-dom'

const RegisterPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {signUp, isAuthenticated, error: authErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(()=> {
        if(isAuthenticated) navigate("/home")
    }, [] )


    const onSubmit = handleSubmit(async (values)=> {
        await signUp(values);
    });

  return (
    <div>
      <h1>Register</h1>
      {
        authErrors.map((error, i) => (
          <div key={i}>errores: {error}</div>
        ))
      }

      <form onSubmit={onSubmit}>
        <label className="form-label">name</label>
        <input type="text" {...register("name", {required: true})} className="form-control"/>
        {errors.name && (<p>name is required</p>)}
        <label className="form-label">email</label>
        <input type="text" {...register("email",  {required: true})} className="form-control"/>
        {errors.email && (<p>email is required</p>)}
        <label className="form-label">password</label>
        <input type="password" {...register("password",{required: true})} className="form-control"/>
        {errors.password && (<p>password is required</p>)}
        <button type="submit" className="btn btn-primary">Register</button>
            
      </form>
    </div>
  )
}

export default RegisterPage

