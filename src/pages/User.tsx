/** @format */

import { FC } from 'react';
import { useActions } from '../common/hooks/useActions'
interface UserProps {}

const User: FC<UserProps> = () => {
    const { exitUser} = useActions();
	return (
		<div className='flex items-center justify-center h-full'>
			<button
				onClick={exitUser}
				className='auth_btn text-3xl font-bold text-cyan-50'>
				Exit
			</button>
		</div>
	);
};

export default User;
