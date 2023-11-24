import {useForm} from 'react-hook-form'
import {  useAuth } from '../context/AuthContext';
import { useNavigate} from 'react-router-dom'

const LoginPage = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();
  const {signIn, error: authErrors}  = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values)=> {
      await signIn(values);
      navigate('/home');

  })
  return (
    <div>
      <h1>login</h1>
      {authErrors.map((error, i)=> (
        <div key={i}>{error}</div>
      ))}
    <form onSubmit={onSubmit}>
      <input type="text" {...register("email", {required: true})} placeholder="email"/>
      {errors.email && (<p>email is required</p>)}
      <input type="text" {...register("password",{required: true})} placeholder="password"/>
      {errors.password && (<p>password is required</p>)}
      <button type="submit">signIn</button>
    </form>
  </div>
  )
}

export default LoginPage