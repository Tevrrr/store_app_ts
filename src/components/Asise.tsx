/** @format */

import { FC } from 'react';

interface AsideProps {}

const Aside: FC<AsideProps> = () => {
	return (
		<aside className='flex flex-col h-full w-full max-w-[17rem] bg-cyan-900 bg-opacity-10 rounded-3xl shadow-lg text-lg font-bold'>
			<h2 className=' text-center text-2xl py-1 px-3 cursor-pointer transition-all rounded-t-2xl dark:bg-cyan-800 bg-cyan-700 hover:bg-cyan-800 dark:hover:bg-cyan-900 text-green-50'>
				Categories
			</h2>
			<label className=' transition-all cursor-pointer p-2 hover:bg-cyan-900 hover:bg-opacity-20 dark:text-cyan-50  text-cyan-900'>
				<input type='radio' name='Categories' className=' hidden' />{' '}
				Categories 1
			</label>
		</aside>
	);
};

export default Aside;
