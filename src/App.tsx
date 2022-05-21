/** @format */

import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import { useTypedSelector } from './common/hooks/useTypedSelector';
import { Route, Routes } from 'react-router-dom';
import { useActions } from './common/hooks/useActions';
import { useEffect } from 'react';

function App() {
	const { darkMode } = useTypedSelector((store) => store.user);
	const { featchProducts, setStorageDarkMode } = useActions();

	useEffect(() => {
		featchProducts('Meat');
		setStorageDarkMode()
	}, []);

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
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
