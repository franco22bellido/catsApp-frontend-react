import { useForm } from "react-hook-form"
import { registerRequest} from '../api/auth'
const RegisterPage = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = handleSubmit(async (values)=> {
        const res = await registerRequest(values);
        console.log(res);
    });

  return (
    <div>
      <form onSubmit={handleSubmit(async (values)=> {
        const res = await registerRequest(values);
        console.log(values)
      })}>
        <input type="text" {...register("username"), {required: true}} placeholder="username"/>
        <input type="text" {...register("email"), {required: true}} placeholder="email"/>
        <input type="text" {...register("password"), {required: true}} placeholder="password"/>
        <button type="submit"></button>
            Register
      </form>
    </div>
  )
}

export default RegisterPage

