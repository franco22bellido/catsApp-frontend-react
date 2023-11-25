import {useForm} from 'react-hook-form'
import {  useAuth } from '../context/AuthContext';
import { Navigate, useNavigate} from 'react-router-dom'

const LoginPage = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();
  const {signIn, error: authErrors}  = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (values)=> {
      await signIn(values);
      return navigate("/home");
  })
  return (
    <div>
      <h1>Login</h1>
      {authErrors.map((error, i)=> (
        <div key={i}>{error}</div>
      ))}
    <form onSubmit={onSubmit} className="form-control">
      <label  className="form-label">Email</label>
      <input type="text" {...register("email", {required: true})}  className='form-control'/>
      {errors.email && (<p>email is required</p>)}
      <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
      <input type="text" {...register("password",{required: true})} className='form-control'/>
      {errors.password && (<p>password is required</p>)}
      <button type="submit" className='btn btn-success'>signIn</button>
    </form>
  </div>
  )
}

export default LoginPage