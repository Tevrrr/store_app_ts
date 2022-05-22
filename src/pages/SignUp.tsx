/** @format */

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useActions } from '../common/hooks/useActions';

interface SignUpProps {}

const SignUp: FC<SignUpProps> = () => {
	const EMAIL_REGEXP =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			passwordRepeat: '',
		},
	});
	const { registerUser } = useActions();
	return (
		<form
			onSubmit={handleSubmit((data) => {
				console.log(data);
				registerUser(data.email, data.password, data.fullName);
			})}
			className=' w-full h-full flex justify-center items-start pt-3 '>
			<div className=' max-w-sm w-full flex flex-col gap-5 bg-cyan-700 dark:bg-cyan-800 p-6 px-10 rounded-3xl text-cyan-50 '>
				<h1 className='text-center text-4xl font-bold uppercase'>
					Sign up
				</h1>
				<div>
					<h2 className='text-xl font-medium pl-3'>Full name</h2>
					<input
						className='auth_input'
						{...register('fullName', {
							required: true,
							minLength: 5,
						})}
					/>
					{errors.fullName && (
						<p>Full name length must be more than 5 characters! </p>
					)}
				</div>
				<div>
					<h2 className='text-xl font-medium pl-3'>Email</h2>
					<input
						className='auth_input'
						{...register('email', {
							required: true,
							pattern: EMAIL_REGEXP,
						})}
					/>
					{errors.email && <p>Please enter a valid email! </p>}
				</div>
				<div>
					<h2 className='text-xl text-cyan-50 font-medium pl-3'>
						Password
					</h2>
					<input
						className='auth_input'
						{...register('password', {
							required: true,
							minLength: 8,
						})}
					/>
					{errors.password && (
						<p>Password length must be more than 8 characters! </p>
					)}
				</div>
				<div>
					<h2 className='text-xl text-cyan-50 font-medium pl-3'>
						Password repeat
					</h2>
					<input
						className='auth_input'
						{...register('passwordRepeat', {
							required: true,
							validate: (value) => value === watch('password'),
						})}
					/>
					{errors.passwordRepeat && <p>Passwords must match! </p>}
				</div>
				<button className='auth_btn text-2xl'> Sign up</button>
				<div className='text-xl flex items-baseline gap-3 justify-between'>
					Already a user?{' '}
					<Link to='/login' className='auth_btn'>
						Login
					</Link>
				</div>
			</div>
		</form>
	);
};

export default SignUp;
