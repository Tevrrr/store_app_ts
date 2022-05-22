/** @format */

import { FC } from 'react';
import Card from './Card';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import Spinner from './Spineer';

interface CatalogProps {}

const Catalog: FC<CatalogProps> = () => {
	const { product } = useTypedSelector((store) => store);
	return (
		<>
			{product.loading ? (
				<div className=' h-full'>
					<Spinner />
				</div>
			) : (
				<article className=' w-full flex flex-wrap justify-around items-start gap-2'>
					{product.products.map((item) => (
						<Card data={item} key={item.id} />
					))}
					<div className='w-[14rem]'></div>
					<div className='w-[14rem]'></div>
				</article>
			)}
		</>
	);
};

export default Catalog;
