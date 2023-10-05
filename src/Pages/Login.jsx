
import '@/Styles/Form.css'
import logo from '../assets/ecommerce.png'
import { useForm } from "react-hook-form";
import { loginUserService } from '../Services/UserService';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../Hooks/useAuthContext';

export const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const { login } = useAuthContext()

  const onSubmit = async (data) => {
    try {
      const response = await loginUserService(data)
      console.log(response)
      if (response.status == 200) {
        navigate('/')
        console.log('Usuario autenticado exitosamente')
        login(response.data.token) // Usa funcion de login en useAuthContext
        //localStorage.setItem('token', response.data.token) //guardar token en local storage
        //console.log(response.data.token)
      }
    } catch (error) {
      console.log('Error en login ', error)
    }
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img
          className="mb-4"
          src={logo}
          alt=""
          width={110}
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            name='email'
            id="floatingInput"
            placeholder="name@example.com"
            {...register('email')}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            name="password"
            id="floatingPassword"
            placeholder="Password"
            {...register('password')}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </form>
    </main>

  )
}
