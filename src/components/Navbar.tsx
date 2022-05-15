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
} from '@fortawesome/free-solid-svg-icons';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	return (
		<nav className=' shadow-lg overflow-hidden flex justify-between items-center py-2 px-4 bg-cyan-700  dark:bg-cyan-800 text-cyan-50 border-2 border-cyan-900 rounded-3xl text-3xl font-medium '>
			<div className=' flex items-center'>
				<button className='hover:text-cyan-200 cursor-pointer p-2'>
					{true ? (
						<FontAwesomeIcon icon={faSun} />
					) : (
						<FontAwesomeIcon icon={faMoon} />
					)}
				</button>
				<FontAwesomeIcon icon={faSun} className=' opacity-0' />
			</div>

			<div className=' hover:text-cyan-200 text-3xl font-bold cursor-pointer flex items-center gap-2'>
				<FontAwesomeIcon icon={faMoneyBillWheat} />
				FoodStore
			</div>
			<div className='flex items-center flex-row-reverse gap-1'>
				{' '}
				<div className='hover:text-cyan-200 cursor-pointer p-2'>
					{false ? (
						<div className=' transition-all hover:text-red-200'>
							<FontAwesomeIcon icon={faRightFromBracket} />
						</div>
					) : (
						<FontAwesomeIcon icon={faRightToBracket} />
					)}
				</div>
				<div className='hover:text-cyan-200  cursor-pointer p-2'>
					<FontAwesomeIcon icon={faCartShopping} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
