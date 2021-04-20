import React from 'react'
import './Login-form.scss';

const LoginForm = () => {
  return (
    <form className='form'>
      <label className='form__email'>
        <p>Nombre de usuario o e-mail</p>
        <input 
          name='email'
          className='form__input'
        />
        <span className='form__label'>
          Email
        </span>
      </label>
      <label className='form__password'>
        <p>contraseña</p>
        <input 
          name='password'
          className='form__input'
        />
        <span className='form__label' type='password'>
          contraseña
        </span>
      </label>
    </form>
  );
}
 
export default LoginForm;