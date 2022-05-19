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
	data: ICartItem;
}

const CartItem: FC<CartItemProps> = ({ data }) => {
	const { delCartItem, incrementCartItem, decrementCartItem } = useActions();
	const [product, setProduct] = useState<Product | null>();
	useEffect(() => {
		featchCart();
	}, [data]);
	const featchCart = async () => {
		const { data: product } = await supabase
			.from('product')
			.select('*')
			.eq('id', data.id);
		setProduct(product ? product[0] : null);
	};
	return (
		<div className='flex items-center  p-3 rounded-3xl text-cyan-900 dark:text-cyan-50  hover:bg-cyan-700 hover:bg-opacity-20 text-xl font-medium '>
			<div className='grow flex items-center'>
				{' '}
				<img src='' alt='' />
				<img
					className='w-auto h-16 object-cover'
					src={
						'https://gwhsegnaelloclejakfb.supabase.co/storage/v1/object/public/image/' +
						product?.imgName
					}
					alt='Milk'
				/>{' '}
				{product?.title}
			</div>
			<div className=' min-w-[5rem] w-20 flex flex-col items-center justify-center'>
				<button
					className=' w-8 h-8 cartItem_btn'
					onClick={() => incrementCartItem(data.id)}>
					<FontAwesomeIcon icon={faCaretUp} />
				</button>
				{data.quantity}
				<button className=' w-8 h-8 cartItem_btn'>
					<FontAwesomeIcon
						icon={faCaretDown}
						onClick={() => decrementCartItem(data.id)}
					/>
				</button>
			</div>
			<div className='min-w-[5rem] w-20 flex justify-center'>
				{product ? data.quantity * product?.price:'-'}$
			</div>
			<button
				className='min-w-[3rem] w-12 h-12 cartItem_btn'
				onClick={() => delCartItem(data.id)}>
				<FontAwesomeIcon icon={faTrashCan} />
			</button>
		</div>
	);
};

export default CartItem;
