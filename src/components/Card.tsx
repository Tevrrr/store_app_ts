/** @format */

import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../common/types/product';
import { useActions } from '../common/hooks/useActions';
import { useTypedSelector } from '../common/hooks/useTypedSelector';

interface CardProps {
	data: Product;
}

const Card: FC<CardProps> = ({ data }) => {
	const { addCartItem, delCartItem } = useActions();
	const productCart = useTypedSelector((state) => state.product.cart);
	return (
		<div className=' shadow-md overflow-hidden dark:text-cyan-50 text-cyan-900 bg-cyan-900 bg-opacity-10 w-full max-w-[14rem] h-auto  rounded-3xl flex flex-col text-lg font-semibold hover:scale-[1.02]'>
			<div className='flex justify-center'>
				<img
					className='w-auto h-56 object-cover'
					src={
						'https://gwhsegnaelloclejakfb.supabase.co/storage/v1/object/public/image/' +
						data.imgName
					}
					alt={data.title}
				/>
			</div>

			<h1 className=' text-center text-2xl font-bold '>{data.title}</h1>
			<div className=' grow px-2'>{data.description}</div>
			<div className='flex justify-between items-baseline bg-cyan-700 dark:bg-cyan-800 text-cyan-50'>
				<h2 className=' py-2 px-4'>{data.price}$</h2>
				{productCart.some(item => item.id === data.id) ? (
					<button
						className=' flex gap-2 items-center font-semibold py-2 px-4 hover:bg-cyan-800 dark:hover:bg-cyan-900'
						onClick={() => {
							delCartItem(data.id);
						}}>
						Delete <FontAwesomeIcon icon={faTrash} />
					</button>
				) : (
					<button
						className=' flex gap-2 items-center font-semibold py-2 px-4 hover:bg-cyan-800 dark:hover:bg-cyan-900'
						onClick={() => {
							addCartItem(data.id);
						}}>
						Buy <FontAwesomeIcon icon={faCartPlus} />
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
