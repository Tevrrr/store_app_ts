/** @format */

import { FC, useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import { Product } from '../common/types/product';
import { supabase } from '../supabase/supabaseClient';
import Spinner from '../components/Spineer';
import { Link } from 'react-router-dom';

interface CartProps {}

const Cart: FC<CartProps> = () => {
	const cart = useTypedSelector((state) => state.product.cart);
	const [product, setProduct] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const totalAmount = (): number => {
		let sum: number = 0;
		product?.forEach((item, i) => {
			sum += item.price * cart[i].quantity;
		});
		return sum;
	};
	useEffect(() => {
		if (cart.length !== product.length) {
			setLoading(true);
			featchProduct();
		} else {
            setLoading(false);
		}
	}, [cart]);

	const featchProduct = async () => {
		const { data } = await supabase
			.from('product')
			.select('*')
			.in(
				'id',
				cart.map((item) => item.id)
			);
		setProduct(data || []);
		setLoading(false);
	};
	return loading ? (
		<Spinner />
	) : (
		<>
			{cart.length ? (
				<div className='flex flex-col gap-4 pt-4 pb-14'>
					<div className=' hidden sm:flex pr-16 p-3 rounded-3xl text-cyan-50 text-xl font-medium dark:bg-cyan-800 bg-cyan-700'>
						<div className='grow'>Name</div>
						<div className=' w-20 flex justify-center'>
							Quantity
						</div>
						<div className=' w-20 flex justify-center'>Price</div>
					</div>
					{product?.map((item, i) => (
						<CartItem
							product={item}
							quantity={cart[i].quantity}
							key={item.id}
						/>
					))}
					<div className=' z-20 fixed bottom-2 left-1 right-1 sm:static overflow-hidden flex gap-2 pr-0 sm:pr-[3.75rem] rounded-3xl text-cyan-50 text-xl font-medium bg-cyan-700 dark:bg-cyan-800'>
						<div className='grow'>
							<Link
								to={'orderform'}
								className='inline-block py-3 px-5 rounded-3xl bg-cyan-800 dark:bg-cyan-900 hover:pr-10 font-medium'>
								Place an order
							</Link>
                            </div>
						<div className='py-3 whitespace-nowrap'>
							Total price:{' '}
						</div>
						<div className='py-3 w-20 flex justify-center'>
							{totalAmount()}$
						</div>
					</div>
				</div>
			) : (
				<div className='flex gap-5 flex-col h-full justify-center text-cyan-800  dark:text-cyan-50'>
					{' '}
					<FontAwesomeIcon
						className='text-9xl'
						icon={faCartArrowDown}
					/>
					<p className=' pl-3 text-center text-3xl'>Cart is empty!</p>
				</div>
			)}
		</>
	);
};

export default Cart;
