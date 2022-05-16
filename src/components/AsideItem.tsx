/** @format */

import { FC } from 'react';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import { useActions } from '../common/hooks/useActions';

interface AsideItemProps {
	value: string;
}

const AsideItem: FC<AsideItemProps> = ({ value }) => {
	const { tag } = useTypedSelector((state) => state.product);
	const { setTag } = useActions();
	return (
		<button
			className={
				' font-semibold transition-all cursor-pointer p-2 dark:text-cyan-50  text-cyan-900 ' +
				(tag === value
					? 'bg-cyan-900 bg-opacity-20'
					: 'hover:bg-cyan-900 hover:bg-opacity-20')
			}
        onClick={()=>{setTag(value)}}>
			 {value}
		</button>
	);
};

export default AsideItem;
