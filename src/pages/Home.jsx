import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { logo } from '../assets/index'
import { CreatePost } from '../pages';
import { Feed } from '../componenets'

const Home = () => {
	//standard
	const location = useLocation().pathname;
	const navigate = useNavigate();
	//state
	const [currentLocation, setCurrentLocation] = useState(location);
	const [btnText, setBtnText] = useState('Create');
	const [btnState, setBtnState] = useState('/create-post');


	function buttonPathWay() {

		if (location == '/create-post') {
			setBtnText('Home');
			setBtnState('/');
		} else {
			setBtnText('Create');
			setBtnState('/create-post');
		}

	}

	useEffect(() => {
		buttonPathWay();
	}, [location]);


	useEffect(() => {
		if (!localStorage.getItem('user')) {
			navigate('/login');
		}
	}, []);



	return (
		<>
			<header className='w-full flex justify-between items-center bg-[#809475] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] '  >
				<Link to='/' className='flex flex-row justify-center items-center gap-2' >
					<img
						className='w-28 object-contain'
						src={logo} alt='logo'
					/>
					<h1>R T E L L I G E N C E</h1>
				</Link>
				<div className='flex flex-col justify-center items-center gap-3' >
					<Link to={`/profile`}
						className='w-20 flex items-center justify-center font-mono font-medium bg-[#9fbf93] text-white px-4 py-2 rounded-md'
					>{`Profile`}</Link>

					<Link to={`${btnState}`}
						className='w-20 flex items-center justify-center first-letter font-mono font-medium bg-[#9fbf93] text-white px-4 py-2 rounded-md'
					>{`${btnText}`}</Link>



				</div>




			</header>

			<main className='sm:p-6 px-2 py-8 w-full min-h-[calc(100vh-73px)]'>
				<Routes>
					<Route className='' path='/create-post' element={<CreatePost />} />

					<Route className='' path='/' element={<Feed />} />
				</Routes>
			</main>
			<footer className='w-full h-40 bg-[#6b8678]' >
				<div className='flex justify-center items-center' >

					<div className='mt-10 flex flex-col justify-center items-center gap-3 text-[12px]' >
						<p>
							© 2022-2023 AceJokerCapital INC.
						</p>
						<a className='' href='acejokercapital@gmail.com'>
							AceJokerCapital@gmail.com
						</a>
						<Link to='/privacy-policy' className=''>
							<p className='underline hover:cursor-pointer'>Privacy Policy</p>
						</Link>

					</div>


				</div>

			</footer>


		</>
	)
}

export default Home
