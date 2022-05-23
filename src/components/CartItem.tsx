/** @format */

import { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTrashCan,
	faCaretDown,
	faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { ICartItem, Product } from '../common/types/product';
import { useActions } from '../common/hooks/useActions';
import { supabase } from '../supabase/supabaseClient';

interface CartItemProps {
	product: Product;
	quantity: number;
}

const CartItem: FC<CartItemProps> = ({ product, quantity }) => {
	const { delCartItem, incrementCartItem, decrementCartItem } = useActions();
	return (
		<div className=' odd:bg-cyan-700 odd:bg-opacity-20 min-h-[96px] flex flex-col sm:flex-row gap-2 items-center  p-3 rounded-3xl text-cyan-900 dark:text-cyan-50  hover:bg-cyan-700 hover:bg-opacity-30 text-xl font-medium '>
			<div className=' w-full sm:w-auto grow flex gap-2 items-center justify-between sm:justify-start'>
				{' '}
				<img
					className='w-auto h-16 object-cover'
					src={
						'https://gwhsegnaelloclejakfb.supabase.co/storage/v1/object/public/image/' +
						product.imgName
					}
					alt='Milk'
				/>{' '}
				<p className='grow sm:grow-0 text-center'>{product.title}</p>
			</div>
			<div className=' flex items-center justify-between w-full sm:w-auto'>
				<div className=' flex items-center gap-2'>
					<p className=' block sm:hidden'>Quantity:</p>
					<div className=' sm:min-w-[5rem] sm:w-20 flex flex-col items-center justify-center'>
						<button
							className=' w-8 h-8 cartItem_btn'
							onClick={() => incrementCartItem(product.id)}>
							<FontAwesomeIcon icon={faCaretUp} />
						</button>
						{quantity}
						<button
							className=' w-8 h-8 cartItem_btn'
							disabled={quantity === 1}
							onClick={() => {
								if (quantity > 1) decrementCartItem(product.id);
							}}>
							<FontAwesomeIcon icon={faCaretDown} />
						</button>
					</div>
				</div>

				<div className='min-w-[5rem] w-20 flex gap-2 justify-center'>
					<p className=' block sm:hidden'>Price:</p>
					{product ? quantity * product?.price : '-'}$
				</div>
				<button
					className='min-w-[3rem] w-12 h-12 cartItem_btn'
					onClick={() => delCartItem(product.id)}>
					<FontAwesomeIcon icon={faTrashCan} />
				</button>
			</div>
		</div>
	);
};

export default CartItem;
