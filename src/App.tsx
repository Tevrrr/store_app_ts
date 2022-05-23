/** @format */

import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import { useTypedSelector } from './common/hooks/useTypedSelector';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { useActions } from './common/hooks/useActions';
import { useEffect } from 'react';
import User from './pages/User';
import OrderForm from './pages/OrderForm';
import { Toaster, toast } from 'react-hot-toast';

function App() {
	const { darkMode, user } = useTypedSelector((store) => store.user);
	const { featchProducts, setStorageDarkMode, loginStorage } = useActions();

	useEffect(() => {
		featchProducts('Meat');
        setStorageDarkMode();
        if (user===null) loginStorage();
    }, []);
    
    function RequireAuth({ children }: { children: JSX.Element }) {
		let location = useLocation();

		if (user === null) {
			toast.error('Available only for authorized users! ');
			return <Navigate to='/login' state={{ from: location }} replace />;
		}

		return children;
	}
	return (
		<div className={darkMode ? 'dark' : ''}>
			<div className='App bg-gray-100 dark:bg-gray-900 w-full flex justify-center'>
				<div className=' w-full box-border max-w-5xl flex flex-col min-h-screen p-1'>
					<Navbar />
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='cart' element={<Cart />} />
						<Route path='login' element={<Login />} />
						<Route path='signup' element={<SignUp />} />
						<Route
							path='user'
							element={
								<RequireAuth>
									<User />
								</RequireAuth>
							}
						/>
						<Route
							path='cart/orderform'
							element={
								<RequireAuth>
									<OrderForm />
								</RequireAuth>
							}
						/>
					</Routes>
					<div>
						<Toaster position='bottom-center' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
