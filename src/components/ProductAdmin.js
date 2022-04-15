import React from 'react';
import { Link } from 'react-router-dom';

const ProductAdmin = ({ product, productId, onDelete }) => {
	return (
		<div className="flex justify-center">
			<div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
				<img
					className="rounded-t-lg w-full h-96 object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
					src={product.imageUrl}
					alt=""
				/>
				<div className="p-6 flex flex-col justify-start">
					<h5 className="text-gray-900 text-xl font-medium mb-2">{product.name}</h5>
					<p className="text-gray-700 text-base mb-4">{product.description}</p>
					<span className="text-2xl font-bold text-gray-900 dark:text-white pb-2">
						{`$${product.price}`}
					</span>
					<Link
						className="text-black bg-green-500 hover:bg-green-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 mb-2"
						to={`/admin/create-product/${productId}`}
					>
						Edit product
					</Link>
					<button
						className="text-black bg-green-500 hover:bg-green-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700"
						onClick={() => onDelete(productId)}
					>
						Delete product
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductAdmin;
