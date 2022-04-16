import React, { useContext, useState, useEffect } from 'react';
import ListOfCheckout from '../components/ListOfCheckout';
import { StoreContext } from '../context/storeContext';
import { saveCheckout } from '../api/checkoutApi';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ModalCheck from '../components/ModalCheck';

const style = {
	input: `form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`,
	button: `w-full px-6 py-2.5	bg-blue-600	text-white font-medium text-xs leading-tight uppercase	rounded	shadow-md	hover:bg-blue-700 hover:shadow-lg	focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0	active:bg-blue-800 active:shadow-lg	transition duration-150	ease-in-out`,
};

const CheckoutPage = () => {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);
	const { listProducts, setListProducts } = useContext(StoreContext);

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(newCheckout.products.length);
		handleOnSave(newCheckout);
		setShowModal(true);
	};

	const onCheckout = (status) => {
		setShowModal(status);
		setListProducts([]);
		navigate('/', { replace: true });
	};

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
		console.log(checkout);
		const savedCheckout = await saveCheckout(checkout);

		console.log(savedCheckout);
	};

	const handleOnChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setNewCheckout({ ...newCheckout, [name]: value });
	};

	const handleOnRemove = async (productId) => {
		const result = await listProducts.filter(
			(product) => product._id !== productId
		);
		await setListProducts(result);
	};

	useEffect(() => {
		reset(newCheckout);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newCheckout]);

	return (
		<>
			<div className="flex">
				<div className="flex-1 w-64 m-6 p-6">
					<ListOfCheckout products={listProducts} onRemove={handleOnRemove} />
				</div>
				<div className="flex-1 w-32 m-6 p-6 rounded-lg shadow-lg bg-white h-80">
					<h1 className="text-2xl p-3 uppercase">Payment</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group mb-6">
							<input
								type="text"
								className={style.input}
								name="name"
								placeholder="Add a name"
								defaultValue={newCheckout.name}
								{...register('name', { required: true })}
								onChange={handleOnChange}
							/>
							{errors.name && (
								<p className="text-rose-600 text-left">Name is required</p>
							)}
						</div>
						<div className="form-group mb-6">
							<input
								className={style.input}
								type="text"
								name="address"
								placeholder="Add address"
								defaultValue={newCheckout.address}
								{...register('address', { required: true })}
								onChange={handleOnChange}
							/>
							{errors.address && (
								<p className="text-rose-600 text-left">Address is required</p>
							)}
						</div>
						<div>
							<span className="text-2xl font-bold text-gray-900 dark:text-white pb-2">
								{`$${total}`}
							</span>

							<button
								type="submit"
								className={style.button}
								disabled={newCheckout.products.length === 0 ? true : false}
							>
								Pay
							</button>
							{newCheckout.products.length === 0 && (
								<p className="text-center text-rose-600 text-left">
									One product is required
								</p>
							)}
						</div>
					</form>
				</div>
			</div>
			{showModal ? (
				<ModalCheck onCheckout={onCheckout} checkout={newCheckout} />
			) : null}
		</>
	);
};

export default CheckoutPage;
