import React, { useContext } from 'react';
import ProductCheckout from './ProductCheckout';

const ListOfCheckout = ({ products, onRemove }) => {
	return (
		<div className="container grid grid-cols-1 max-w-full gap-6">
			{products.map((product) => {
				return (
					<ProductCheckout
						key={product._id}
						product={product}
						productId={product._id}
						onRemove={onRemove}
					/>
				);
			})}
		</div>
	);
};

export default ListOfCheckout;
