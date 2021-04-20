import React from 'react';
import './Login.scss';
import LoginForm from '../../components/LogIn-Form/Login-form'

const Login = () => {
	return (
		<div className='login__container'>
			<h2>Inicia Sesión</h2>
			<LoginForm />
		</div>
	);
};

export default Login;
