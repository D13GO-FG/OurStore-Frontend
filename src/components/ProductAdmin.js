import React from 'react';
import { Link } from 'react-router-dom';

const ProductAdmin = ({ product, productId, onDelete }) => {
	return (
		// <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
		// 	<div className="mb-8">
		// 		<div className="text-gray-900 font-bold text-xl mb-2">{product.name}</div>
		// 		<p className="text-gray-700 text-base">{product.description}</p>
		// 	</div>
		// 	<div className="flex items-center">
		// 		<div className="text-sm">
		// 			<p className="text-gray-900 leading-none">{product.price}</p>
		// 		</div>
		// 		<Link to={`/admin/create-product/${productId}`}>Edit product</Link>
		// 		<button onClick={() => onDelete(productId)}>Delete product</button>
		// 	</div>
		// </div>
		<div class="flex justify-center">
			<div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
				<img
					class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
					src={product.imageUrl}
					alt=""
				/>
				<div class="p-6 flex flex-col justify-start">
					<h5 class="text-gray-900 text-xl font-medium mb-2">{product.name}</h5>
					<p class="text-gray-700 text-base mb-4">{product.description}</p>
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
