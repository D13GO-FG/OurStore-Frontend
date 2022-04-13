import React from 'react';
import { Link } from 'react-router-dom';

const ProductAdmin = ({ product, productId, onDelete }) => {
	return (
		<div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
			<div className="mb-8">
				<div className="text-gray-900 font-bold text-xl mb-2">{product.name}</div>
				<p className="text-gray-700 text-base">{product.description}</p>
			</div>
			<div className="flex items-center">
				<div className="text-sm">
					<p className="text-gray-900 leading-none">{product.price}</p>
				</div>
				<Link to={`/admin/create-product/${productId}`}>Edit product</Link>
				<button onClick={() => onDelete(productId)}>Delete product</button>
			</div>
		</div>
	);
};

export default ProductAdmin;
