/** @format */

import { FC } from 'react';
import { Link } from 'react-router-dom';

interface SignUpProps {}

const SignUp: FC<SignUpProps> = () => {
	return (
		<div className=' w-full h-full flex justify-center items-start pt-10 '>
			<div className=' max-w-sm w-full flex flex-col gap-5 bg-cyan-700 p-6 px-10 rounded-3xl text-cyan-50 '>
				<h1 className='text-center text-4xl font-bold uppercase'>
					Sign up
				</h1>
				<div>
					<h2 className='text-xl font-medium pl-3'>Full name</h2>
					<input
						className='auth_input'
						type='text'
						name='fullName'
					/>
				</div>
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
				<div>
					<h2 className='text-xl text-cyan-50 font-medium pl-3'>
						Password repeat
					</h2>
					<input
						className='auth_input'
						type='password'
						name='passwordRepeat'
					/>
				</div>
				<button className='auth_btn text-2xl'> Sign up</button>
				<div className='text-xl flex items-baseline gap-3 justify-between'>
					Already a user? <Link to='/login' className='auth_btn'>Login</Link>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
