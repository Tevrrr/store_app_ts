/** @format */

import { FC, useState } from 'react';
import { productTags } from '../common/productTags'
import AsideItem from './AsideItem';
import { useActions } from '../common/hooks/useActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
interface AsideProps {}

const Aside: FC<AsideProps> = () => {
    const { featchProducts } = useActions();
    const [openMenu, setOpenMenu] = useState( false)
    const [tag, setTag] = useState('Meat')
    function clickItem(value: string): () => void{
        return () => {
            setTag(value);
            featchProducts(value);
        }
    }
    return (
		<div
			className={
				'z-10 fixed sm:static top-0 left-0 right-[-1rem] sm:ml-0 w-screen py-1 sm:bg-opacity-0 bg-opacity-20 ' +
				(openMenu ? 'bg-black' : ' max-w-[17rem] ml-[-17.5rem]  ')
			}>
			<aside
				className={
					' relative  h-screen  flex flex-col  w-full max-w-[17rem] bg-cyan-700 sm:bg-opacity-10 rounded-3xl shadow-lg text-lg font-bold sm:ml-0  ' +
					(openMenu ? '' : ' ')
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
				<h2 className=' text-center text-2xl py-1 px-3 transition-all rounded-t-2xl dark:bg-cyan-800 bg-cyan-700 text-green-50'>
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
		</div>
	);
};

export default Aside;
