/** @format */

import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrashCan, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
interface CartItemProps {}

const CartItem: FC<CartItemProps> = () => {
	return (
		<div className='flex items-center  p-3 rounded-3xl text-cyan-900 dark:text-cyan-50  hover:bg-cyan-700 hover:bg-opacity-20 text-xl font-medium '>
			<div className='grow flex items-center'>
				{' '}
				<img src='' alt='' />
				<img
					className='w-auto h-16 object-cover'
					src='https://molokopestravka.ru/upload/iblock/d88/d88ef25f54788fae4d6880888a589033.png'
					alt='Milk'
				/>{' '}
				MilkMilk Milk Milk MilkMilk
			</div>
			<div className=' min-w-[5rem] w-20 flex flex-col items-center justify-center'>
				<button className=' w-8 h-8 cartItem_btn'>
					<FontAwesomeIcon icon={faCaretUp} />
				</button>
				1
				<button className=' w-8 h-8 cartItem_btn'>
					<FontAwesomeIcon icon={faCaretDown} />
				</button>
			</div>
			<div className='min-w-[5rem] w-20 flex justify-center'>5$</div>
			<button className='min-w-[3rem] w-12 h-12 cartItem_btn'>
				<FontAwesomeIcon icon={faTrashCan} />
			</button>
		</div>
	);
};

export default CartItem;
