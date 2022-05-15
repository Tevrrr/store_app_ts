/** @format */

import { FC } from 'react';
import Card from './Card';

interface CatalogProps {}

const Catalog: FC<CatalogProps> = () => {
	return (
		<article className=' w-full flex flex-wrap justify-around items-start gap-2'>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</article>
	);
};

export default Catalog;
