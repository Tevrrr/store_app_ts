/** @format */

import { FC } from 'react';
import Aside from '../components/Aside';
import Catalog from '../components/Catalog';

interface MainProps {}

const Main: FC<MainProps> = () => {
	return (
		<div className=' relative flex gap-2 h-full pt-2'>
				<Aside />
			<div className=' grow'>
				<Catalog />
			</div>
		</div>
	);
};

export default Main;
