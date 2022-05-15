/** @format */

import { FC } from 'react';
import CartItem from '../components/CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

interface CartProps {}

const Cart: FC<CartProps> = () => {
	return (
		<div className='flex flex-col gap-4 pt-4'>
			<div className='flex  pr-16 p-3 rounded-3xl text-cyan-50 text-xl font-medium dark:bg-cyan-800 bg-cyan-700'>
				<div className='grow'>Name</div>
				<div className=' w-20 flex justify-center'>Quantity</div>
				<div className=' w-20 flex justify-center'>Price</div>
			</div>
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
			<div className='flex gap-4 p-3 rounded-3xl text-cyan-50 text-xl font-medium bg-cyan-700 dark:bg-cyan-800'>
				<div className='grow'>Total price: </div>
				<div className=' w-20 flex justify-center'>20$</div>

			</div>
		</div>
	);
};

export default Cart;
