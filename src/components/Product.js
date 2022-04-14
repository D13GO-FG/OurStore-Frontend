import React, { useContext } from 'react';
import { StoreContext } from '../context/storeContext';

const Product = ({ product, productId }) => {
	const { listProducts, setListProducts } = useContext(StoreContext);

	return (
		<div className="max-w-sm bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
			<img
				className="rounded-t-lg block h-auto w-full"
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
						onClick={() => setListProducts([...listProducts, product])}
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
