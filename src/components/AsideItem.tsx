/** @format */

import { FC } from 'react';
import { useTypedSelector } from '../common/hooks/useTypedSelector';

interface AsideItemProps {
	value: string;
	active: boolean;
    onClick: () => void;
}

const AsideItem: FC<AsideItemProps> = ({ value, active, onClick }) => {

	return (
		<button
			className={
				' font-semibold transition-all cursor-pointer p-2 text-cyan-50 sm:dark:text-cyan-50  sm:text-cyan-900 ' +
				(active
					? 'bg-cyan-900  bg-opacity-50'
					: 'hover:bg-cyan-900 hover:bg-opacity-50')
			}
			onClick={onClick}>
			{value}
		</button>
	);
};

export default AsideItem;
