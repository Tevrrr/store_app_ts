/** @format */

import { FC } from 'react';
import { useActions } from '../common/hooks/useActions';
import { useNavigate } from 'react-router-dom';
interface UserProps {}

const User: FC<UserProps> = () => {
	const { exitUser } = useActions();
    const navigate = useNavigate();
    const exitBtn = () => {
        exitUser();
		navigate('/');
    }
	return (
		<div className='flex items-center justify-center h-full'>
			<button
				onClick={exitBtn}
				className='auth_btn text-3xl font-bold text-cyan-50'>
				Exit
			</button>
		</div>
	);
};

export default User;
