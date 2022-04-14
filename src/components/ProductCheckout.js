import React, { useContext } from 'react';
import { StoreContext } from '../context/storeContext';

const ProductCheckout = ({ product, productId, onRemove }) => {
	const { listProducts, setListProducts } = useContext(StoreContext);

	return (
		<div className="flex justify-center">
			<div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
				<img
					className="h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
					src={product.imageUrl}
					alt="Product"
				/>
				<div className="p-6 flex flex-col justify-start">
					<h5 className="text-gray-900 text-xl font-medium mb-2">{product.name}</h5>
					<p className="text-gray-700 text-base mb-4">{product.description}</p>
					<span className="text-2xl font-bold text-gray-900 dark:text-white pb-2">
						{`$${product.price}`}
					</span>
					<div className="flex-row">
						<button
							type="button"
							onClick={() => {
								onRemove(productId);
							}}
							className="text-black bg-green-500 hover:bg-green-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700"
						>
							Remove product
						</button>
					</div>
				</div>
			</div>
		</div>
		// <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
		// 	<div class="md:flex">
		// 		<div class="md:shrink-0">
		// 			<img
		// 				class="h-48 w-full object-cover md:h-full md:w-48"
		// 				src={product.imageUrl}
		// 				alt="Man looking at item at a store"
		// 			/>
		// 		</div>
		// 		<div class="p-8">
		// 			<div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
		// 				{product.price}
		// 			</div>
		// 			<h1 class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
		// 				{product.name}
		// 			</h1>
		// 			<p class="mt-2 text-slate-500">{product.description}</p>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default ProductCheckout;
