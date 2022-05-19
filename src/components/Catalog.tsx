/** @format */

import { FC } from 'react';
import Card from './Card';
import { useTypedSelector} from '../common/hooks/useTypedSelector'

interface CatalogProps {}

const Catalog: FC<CatalogProps> = () => {
    const { products} = useTypedSelector(store => store.product)
	return (
		<article className=' w-full flex flex-wrap justify-around items-start gap-2'>
			{products.map((item) => (
				<Card data={item} key={item.id} />
			))}
			<div className='w-[14rem]'></div>
			<div className='w-[14rem]'></div>
		</article>
	);
};

export default Catalog;
