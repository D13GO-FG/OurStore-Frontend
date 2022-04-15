import React, { useContext } from 'react';
import { StoreContext } from '../context/storeContext';

const Product = ({ product, productId }) => {
	const { listProducts, setListProducts } = useContext(StoreContext);

	var mongoObjectId = function () {
		var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
		return (
			timestamp +
			'xxxxxxxxxxxxxxxx'
				.replace(/[x]/g, function () {
					return ((Math.random() * 16) | 0).toString(16);
				})
				.toLowerCase()
		);
	};

	const addPruduct = (product, productId) => {
		const even = listProducts.some((product) => product._id === productId);
		if (even) {
			const thisProduct = { ...product };
			thisProduct._id = mongoObjectId();
			console.log(thisProduct);
			setListProducts([...listProducts, thisProduct]);
		} else {
			setListProducts([...listProducts, product]);
		}
	};
	return (
		<div className="rounded overflow-hidden shadow-lg">
			<div className="flex flex-1 flex-col justify-between"></div>
			<img
				className="w-full h-80 object-cover"
				src={product.imageUrl}
				alt="Product"
			/>
			<div className="px-5 pb-5">
				<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
					{product.name}
				</h5>
				<div className="flex flex-col justify-between items-center">
					<span className="text-2xl font-bold text-gray-900 dark:text-white">
						{`$${product.price}`}
					</span>
					<button
						type="button"
						onClick={() => addPruduct(product, productId)}
						className="text-black bg-green-500 hover:bg-green-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700"
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
