/** @format */

import { FC } from 'react';
import { productTags } from '../common/productTags'
import AsideItem from './AsideItem';

interface AsideProps {}

const Aside: FC<AsideProps> = () => {
	return (
		<aside className='flex flex-col h-full w-full max-w-[17rem] bg-cyan-900 bg-opacity-10 rounded-3xl shadow-lg text-lg font-bold'>
			<h2 className=' text-center text-2xl py-1 px-3 transition-all rounded-t-2xl dark:bg-cyan-800 bg-cyan-700 text-green-50'>
				Categories
			</h2>
            {productTags.map((item, i) => { return <AsideItem value={item} key={i} />})}
		</aside>
	);
};

export default Aside;
