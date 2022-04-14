import React, { useContext, useState } from 'react';
import ListOfCheckout from '../components/ListOfCheckout';
import { StoreContext } from '../context/storeContext';
import { saveCheckout } from '../api/checkoutApi';
import { useNavigate } from 'react-router-dom';

const style = {
	input: `form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`,
	button: `w-full px-6 py-2.5	bg-blue-600	text-white font-medium text-xs leading-tight uppercase	rounded	shadow-md	hover:bg-blue-700 hover:shadow-lg	focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0	active:bg-blue-800 active:shadow-lg	transition duration-150	ease-in-out`,
};

const CheckoutPage = () => {
	const navigate = useNavigate();

	const { listProducts, setListProducts } = useContext(StoreContext);

	const total = listProducts.reduce((accumulator, object) => {
		return accumulator + object.price;
	}, 0);

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

	const handleOnRemove = async (productId) => {
		// const copyOfProducts = Array.from(listProducts);
		// const index = copyOfProducts.indexOf({ _id: productId });
		// console.log(index);
		const result = await listProducts.filter(
			(product) => product._id !== productId
		);
		await setListProducts(result);
		console.log(listProducts);
	};

	return (
		<>
			<div className="flex">
				<div className="flex-1 w-64 m-6 p-6">
					<ListOfCheckout products={listProducts} onRemove={handleOnRemove} />
				</div>
				<div className="flex-1 w-32 m-6 p-6 rounded-lg shadow-lg bg-white h-80">
					<h1 className="text-2xl p-3 uppercase">Payment</h1>
					<form>
						<div className="form-group mb-6">
							<input
								type="text"
								className={style.input}
								name="name"
								placeholder="Add a name"
								value={newCheckout.name}
								onChange={handleOnChange}
							/>
						</div>
						<div className="form-group mb-6">
							<input
								className={style.input}
								type="text"
								name="address"
								placeholder="Add address"
								value={newCheckout.address}
								onChange={handleOnChange}
							/>
						</div>
						<div>
							<span className="text-2xl font-bold text-gray-900 dark:text-white pb-2">
								{`$${total}`}
							</span>
							<button
								type="button"
								disabled={newCheckout.name === '' || newCheckout.address === ''}
								className={style.button}
								onClick={() => {
									handleOnSave(newCheckout);
								}}
							>
								Pay
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CheckoutPage;
