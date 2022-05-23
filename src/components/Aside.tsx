/** @format */

import { FC, useState } from 'react';
import { productTags } from '../common/productTags';
import AsideItem from './AsideItem';
import { useActions } from '../common/hooks/useActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
interface AsideProps {}

const Aside: FC<AsideProps> = () => {
	const { featchProducts } = useActions();
	const [openMenu, setOpenMenu] = useState(false);
	const [tag, setTag] = useState('Meat');
	function clickItem(value: string): () => void {
		return () => {
			setTag(value);
			featchProducts(value);
		};
	}
	return (
		<>
			<aside
				className={
					' z-20 fixed sm:static  h-screen  flex flex-col w-full max-w-[17rem] bg-cyan-700 sm:bg-opacity-10 sm:rounded-3xl sm:shadow-lg text-2xl sm:text-lg font-bold sm:ml-0 left-0 top-0 bottom-0 ' +
					(openMenu ? '' : 'ml-[-17.5rem]')
				}>
				<button
					className='sm:hidden absolute top-20 right-[-2.5rem] w-10 h-10 text-white text-3xl rounded-r-full bg-cyan-700 dark:bg-cyan-800'
					onClick={() => {
						setOpenMenu(!openMenu);
					}}>
					{openMenu ? (
						<FontAwesomeIcon icon={faAngleLeft} />
					) : (
						<FontAwesomeIcon icon={faAngleRight} />
					)}
				</button>
				<h2 className=' text-center text-2xl py-1 px-3 transition-all sm:rounded-t-3xl bg-black bg-opacity-20 sm:bg-opacity-100 sm:dark:bg-cyan-800 sm:bg-cyan-700 text-cyan-50'>
					Categories
				</h2>
				{productTags.map((item, i) => {
					return (
						<AsideItem
							value={item}
							active={tag === item}
							onClick={clickItem(item)}
							key={i}
						/>
					);
				})}
			</aside>
			<div
				className={
					' z-10 sm:hidden fixed top-0 bottom-0 w-screen h-screen bg-black bg-opacity-25 ' +
					(openMenu ? '' : 'hidden')
				}
				onClick={() => {
					setOpenMenu(false);
				}}></div>
		</>
	);
};

export default Aside;
