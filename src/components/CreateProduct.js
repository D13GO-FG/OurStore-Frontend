import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const style = {
	input: `form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`,
	button: `w-full px-6 py-2.5	bg-blue-600	text-white font-medium text-xs leading-tight uppercase	rounded	shadow-md	hover:bg-blue-700 hover:shadow-lg	focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0	active:bg-blue-800 active:shadow-lg	transition duration-150	ease-in-out`,
};

const CreateProduct = ({ onSave, product }) => {
	const defaultNewProduct = {
		name: '',
		description: '',
		imageUrl: '',
		updatedAt: new Date().toISOString(),
		price: 0,
	};

	const [newProduct, setNewProduct] = useState(defaultNewProduct);
	useEffect(() => {
		if (product) {
			setNewProduct(product);
		}
	}, [product]);

	const handleOnChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setNewProduct({ ...newProduct, [name]: value });
	};

	return (
		<div className="m-6 p-6 rounded-lg shadow-lg bg-white">
			<form>
				<div className="form-group mb-6">
					<input
						type="text"
						className={style.input}
						name="name"
						placeholder="Add a name"
						value={newProduct.name}
						onChange={handleOnChange}
					/>
				</div>
				<div className="form-group mb-6">
					<input
						className={style.input}
						type="number"
						name="price"
						placeholder="Add price"
						value={newProduct.price}
						onChange={handleOnChange}
					/>
				</div>
				<div className="form-group mb-6">
					<textarea
						className={style.input}
						rows="3"
						type="text"
						name="description"
						placeholder="Add a body description"
						value={newProduct.description}
						onChange={handleOnChange}
					></textarea>
				</div>
				<div className="form-group mb-6">
					<input
						className={style.input}
						type="text"
						name="imageUrl"
						placeholder="Add an image url"
						value={newProduct.imageUrl}
						onChange={handleOnChange}
					/>
					{newProduct.imageUrl !== '' && (
						<img
							style={{
								marginTop: '40px',
								maxHeight: '200px',
								maxWidth: '400px',
								alignSelf: 'center',
								borderRadius: '8px',
							}}
							src={newProduct.imageUrl}
							alt="img"
						/>
					)}
				</div>
				<div className="flex space-x-4">
					<Link className={style.button} to="/admin">
						Cancel
					</Link>

					<button
						type="button"
						className={style.button}
						disabled={newProduct.name === '' || newProduct.price === undefined}
						onClick={() => {
							if (product?._id) onSave(product._id, newProduct);
							else onSave(newProduct);
						}}
					>
						Send
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateProduct;
