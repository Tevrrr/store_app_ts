/** @format */

import { FC, useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import { Product } from '../common/types/product';
import { supabase } from '../supabase/supabaseClient'

interface CartProps {}

const Cart: FC<CartProps> = () => {
    const product = useTypedSelector((state) => state.product);
    const totalAmount = (): number => {
        let sum:number = 0;
        product.cart.forEach((item) => { sum += item.quantity })
        return sum;
    }
	return (
		<div className='flex flex-col gap-4 pt-4'>
			<div className='flex  pr-16 p-3 rounded-3xl text-cyan-50 text-xl font-medium dark:bg-cyan-800 bg-cyan-700'>
				<div className='grow'>Name</div>
				<div className=' w-20 flex justify-center'>Quantity</div>
				<div className=' w-20 flex justify-center'>Price</div>
			</div>
			{product.cart.map((item) => (
				<CartItem data={item} key={item.id} />
			))}
			<div className='flex gap-4 p-3 rounded-3xl text-cyan-50 text-xl font-medium bg-cyan-700 dark:bg-cyan-800'>
				<div className='grow'>Total price: </div>
				<div className=' w-20 flex justify-center'>{totalAmount()}$</div>
			</div>
		</div>
	);
};

export default Cart;
