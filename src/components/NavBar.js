import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/storeContext';

const style = {
	wrapper: `bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow-sm mb-5`,
	containerNavBar: `container flex flex-wrap justify-between items-center mx-auto`,
	title: `self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-mono text-emerald-700`,
	button: `text-black bg-green-500 hover:bg-green-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700`,
	carshop: `font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3`,
};

const NavBar = () => {
	const { listProducts } = useContext(StoreContext);
	const path = window.location.href;

	return (
		<nav className={style.wrapper}>
			<div className={style.containerNavBar}>
				<div className="flex items-center">
					<Link to={'/'} className={style.title}>
						OurStore
					</Link>
				</div>
				<div className="flex md:order-2">
					{!path.includes('admin') ? (
						<Link to={'/admin'} type="button" className={style.button}>
							Administrador
						</Link>
					) : (
						<Link to={'/'} type="button" className={style.button}>
							Store
						</Link>
					)}

					<div className={style.carshop}>
						<Link className="flex space-x-4" to={'/checkout'}>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								></path>
							</svg>
							<h1 className="text-base">{listProducts.length}</h1>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
