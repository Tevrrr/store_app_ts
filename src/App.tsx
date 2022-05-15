/** @format */


import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Main from './pages/Main';
import SignUp from './pages/SignUp';

function App() {
    return (
		<div className={false ? 'dark': ''}>
			<div className='App bg-gray-100 dark:bg-gray-900 w-full flex justify-center'>
				<div className=' w-full box-border max-w-5xl flex flex-col min-h-screen p-1'>
					<Navbar />
                    {/* <Main /> */}
                    {/* <Cart/> */}
                    {/* <Login/> */}
                    <SignUp/>
				</div>
			</div>
		</div>
	);
}

export default App;
