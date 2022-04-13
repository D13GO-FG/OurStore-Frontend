import React, { useContext, useState } from 'react';
import ListOfCheckout from '../components/ListOfCheckout';
import { StoreContext } from '../context/storeContext';
import { saveCheckout } from '../api/checkoutApi';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
	const navigate = useNavigate();
	const { listProducts, setListProducts } = useContext(StoreContext);
	const total = listProducts.reduce((accumulator, object) => {
		return accumulator + object.price;
	}, 0);
	console.log(total);
	const defaultCheckout = {
		name: '',
		address: '',
		products: listProducts,
		total: total,
	};
	const [newCheckout, setNewCheckout] = useState(defaultCheckout);

	const handleOnSave = async (checkout) => {
		const savedCheckout = await saveCheckout(checkout);
		setListProducts([]);
		navigate('/', { replace: true });
		console.log(savedCheckout);
	};

	const handleOnChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setNewCheckout({ ...newCheckout, [name]: value });
	};
	return (
		<>
			<ListOfCheckout products={listProducts} />
			<form>
				<div>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Name
					</label>
					<input
						type="text"
						name="name"
						onChange={handleOnChange}
						id="small-input"
						className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Address
					</label>
					<input
						type="text"
						name="address"
						onChange={handleOnChange}
						id="small-input"
						className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
					<button
						type="button"
						disabled={newCheckout.name === '' || newCheckout.address === ''}
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						onClick={() => {
							handleOnSave(newCheckout);
						}}
					>
						Submit
					</button>
				</div>
			</form>
		</>
	);
};

export default CheckoutPage;
