/** @format */

import { FC, useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import { Product } from '../common/types/product';
import { supabase } from '../supabase/supabaseClient';
import Spinner from '../components/Spineer';

interface CartProps {}

const Cart: FC<CartProps> = () => {
	const cart = useTypedSelector((state) => state.product.cart);
	const [product, setProduct] = useState<Product[] | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const totalAmount = (): number => {
		let sum: number = 0;
		product?.forEach((item, i) => {
			sum += item.price * cart[i].quantity;
		});
		return sum;
	};
	useEffect(() => {
		setLoading(true);
		featchProduct();
	}, [cart]);

	const featchProduct = async () => {
		const { data } = await supabase
			.from('product')
			.select('*')
			.in(
				'id',
				cart.map((item) => item.id)
			);
		setProduct(data || null);
		setLoading(false);
	};
	return loading ? (
		<Spinner />
	) : (
		<div className='flex flex-col gap-4 pt-4'>
			<div className='flex  pr-16 p-3 rounded-3xl text-cyan-50 text-xl font-medium dark:bg-cyan-800 bg-cyan-700'>
				<div className='grow'>Name</div>
				<div className=' w-20 flex justify-center'>Quantity</div>
				<div className=' w-20 flex justify-center'>Price</div>
			</div>
			{product?.map((item, i) => (
				<CartItem
					product={item}
					quantity={cart[i].quantity}
					key={item.id}
				/>
			))}
			<div className='flex gap-4 p-3 rounded-3xl text-cyan-50 text-xl font-medium bg-cyan-700 dark:bg-cyan-800'>
				<div className='grow'>Total price: </div>
				<div className=' w-20 flex justify-center'>
					{totalAmount()}$
				</div>
			</div>
		</div>
	);
};

export default Cart;
