/** @format */

import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

interface CardProps {}

const Card: FC<CardProps> = () => {
	return (
		<div className=' shadow-md overflow-hidden dark:text-cyan-50 text-cyan-900 bg-cyan-900 bg-opacity-10 w-full max-w-[14rem] h-auto  rounded-3xl flex flex-col text-lg font-semibold'>
			<div className='flex justify-center'>
				<img
					className='w-auto h-56 object-cover'
					src='https://molokopestravka.ru/upload/iblock/d88/d88ef25f54788fae4d6880888a589033.png'
					alt='Milk'
				/>
			</div>

			<h1 className=' text-center text-2xl font-bold '>Milk</h1>
			<div className=' grow px-2'>Any text</div>
			<div className='flex justify-between items-baseline bg-cyan-700 dark:bg-cyan-800 text-cyan-50'>
				<h2 className=' py-2 px-4'>5$</h2>
				<button className=' flex items-center font-semibold py-2 px-4 hover:bg-cyan-800 dark:hover:bg-cyan-900'>
					Buy <FontAwesomeIcon icon={faCartPlus} />
				</button>
			</div>
		</div>
	);
};

export default Card;
