/** @format */

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useActions } from '../common/hooks/useActions';
import { useTypedSelector } from '../common/hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';

interface OrderFormProps {}

const OrderForm: FC<OrderFormProps> = () => {
	const PHONE_NUMBER_REGEXP =
		/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
	const { cart } = useTypedSelector((state) => state.product);
    const user = useTypedSelector((state) => state.user);
    const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			phoneNumber: '',
			address: '',
		},
	});
	const { sendOrderForm, emptyCartItem } = useActions();

	return (
		<form
			onSubmit={handleSubmit((data) => {
				console.log(data);
				sendOrderForm(
					user.fullName,
					data.phoneNumber,
					data.address,
					JSON.stringify(cart)
                );
                emptyCartItem();
                navigate('/', { replace: true });
			})}
			className=' w-full h-full flex justify-center items-start pt-3 '>
			<div className=' max-w-sm w-full flex flex-col gap-5 bg-cyan-700 dark:bg-cyan-800 p-6 px-10 rounded-3xl text-cyan-50 '>
				<h1 className='text-center text-4xl font-bold uppercase'>
					Order Form
				</h1>
				<div>
					<h2 className='text-xl font-medium pl-3'>Phone number</h2>
					<input
						className='auth_input'
						{...register('phoneNumber', {
							required: true,
							pattern: PHONE_NUMBER_REGEXP,
						})}
					/>
					{errors.phoneNumber && (
						<p>
							Enter a valid phone number (for example
							+7(903)888-88-88 or +380(67)777-7-777){' '}
						</p>
					)}
				</div>
				<div>
					<h2 className='text-xl font-medium pl-3'>Address</h2>
					<input
						className='auth_input'
						{...register('address', {
							required: true,
							minLength: 5,
						})}
					/>
					{errors.address && (
						<p>Address cannot be less than 5 characters!</p>
					)}
				</div>
				<button className='auth_btn text-2xl'>Accept</button>
			</div>
		</form>
	);
};

export default OrderForm;
