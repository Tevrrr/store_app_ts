/** @format */

import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSun,
	faMoon,
	faRightToBracket,
	faRightFromBracket,
	faMoneyBillWheat,
	faCartShopping,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import { useActions } from '../common/hooks/useActions';
import { Link } from 'react-router-dom';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	const { user, darkMode } = useTypedSelector((state) => state.user);
	const { toggleDarkMode } = useActions();

	return (
		<nav className=' w-full sm:static  h-full max-h-[4.5rem] shadow-lg overflow-hidden flex justify-between items-center py-2 px-2 sm:px-4 bg-cyan-700  dark:bg-cyan-800 text-cyan-50 border-2 border-cyan-900 rounded-3xl text-3xl font-medium '>
			<div className=' flex items-center'>
				<button
					className='hover:text-cyan-200 cursor-pointer p-2'
					onClick={() => {
						toggleDarkMode();
					}}>
					{darkMode ? (
						<FontAwesomeIcon icon={faMoon} />
					) : (
						<FontAwesomeIcon icon={faSun} />
					)}
				</button>
				<FontAwesomeIcon icon={faSun} className=' opacity-0' />
			</div>

			<Link
				to='/'
				className='hover:text-cyan-200 text-3xl font-bold cursor-pointer flex items-center gap-2'>
				<FontAwesomeIcon icon={faMoneyBillWheat} />
				<p className=' hidden sm:block'>FoodStore</p>
				<div className=' sm:hidden flex flex-col items-center justify-center text-xl leading-4'>
					<p className=' '>Food</p>
					<p className=''>Store</p>
				</div>
			</Link>

			<div className='flex items-center flex-row-reverse gap-1'>
				{' '}
				<div className='hover:text-cyan-200 cursor-pointer p-2'>
					{user ? (
						<div className=' transition-all hover:text-red-200'>
							<Link to='/user'>
								<FontAwesomeIcon icon={faUser} />
							</Link>
						</div>
					) : (
						<Link to='/login'>
							<FontAwesomeIcon icon={faRightToBracket} />
						</Link>
					)}
				</div>
				<div className='hover:text-cyan-200  cursor-pointer p-2'>
					<Link to='cart'>
						<FontAwesomeIcon icon={faCartShopping} />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
