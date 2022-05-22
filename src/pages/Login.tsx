/** @format */

import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useActions } from '../common/hooks/useActions';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({ defaultValues: { email: '', password: '', saving: '' } });
	const { login } = useActions();
	return (
		<form
			onSubmit={handleSubmit((data) => {
				console.log(data);
				login(data.email, data.password, data.saving === 'true');
			})}
			className=' w-full h-full flex justify-center items-start pt-10 '>
			<div className=' max-w-sm w-full flex flex-col gap-5 bg-cyan-700 dark:bg-cyan-800 p-6 px-10 rounded-3xl text-cyan-50 '>
				<h1 className='text-center text-4xl font-bold uppercase'>
					Login
				</h1>
				<div>
					<h2 className='text-xl font-medium pl-3'>Email</h2>
					<input
						className='auth_input'
						{...register('email', {
							required: true,
						})}
					/>
					{errors.password && <p>This field cannot be empty!</p>}
				</div>
				<div>
					<h2 className='text-xl text-cyan-50 font-medium pl-3'>
						Password
					</h2>
					<input
						className='auth_input'
						{...register('password', { required: true })}
						type={'password'}
					/>
					{errors.password && <p>This field cannot be empty!</p>}
				</div>
				<div className=' flex justify-start'>
					<label className=' flex items-center gap-1 text-xl cursor-pointer p-2'>
						<input
							type='checkbox'
							className=' hidden'
							{...register('saving')}
						/>{' '}
						<div className='auth_checkbox'>
							<FontAwesomeIcon icon={faCheck} />
						</div>{' '}
						Remember me?
					</label>
				</div>
				<button className='auth_btn text-2xl'> Login</button>
				<div className='text-xl flex items-baseline gap-3 justify-between'>
					Need an account?{' '}
					<Link to='/signup' className='auth_btn'>
						Sign up
					</Link>
				</div>
			</div>
		</form>
	);
};

export default Login;
