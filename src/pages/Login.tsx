/** @format */

import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
    } = useForm();
    
	return (
		<div className=' w-full h-full flex justify-center items-start pt-10 '>
			<div className=' max-w-sm w-full flex flex-col gap-5 bg-cyan-700 p-6 px-10 rounded-3xl text-cyan-50 '>
				<h1 className='text-center text-4xl font-bold uppercase'>
					Login
				</h1>
				<div>
					<h2 className='text-xl font-medium pl-3'>Email</h2>
					<input className='auth_input' type='email' name='email' />
				</div>
				<div>
					<h2 className='text-xl text-cyan-50 font-medium pl-3'>
						Password
					</h2>
					<input
						className='auth_input'
						type='password'
						name='password'
					/>
				</div>
				<button className='auth_btn text-2xl'> Login</button>
				<div className='text-xl flex items-baseline gap-3 justify-between'>
					Need an account?{' '}
					<Link to='/signup' className='auth_btn'>
						Sign up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
