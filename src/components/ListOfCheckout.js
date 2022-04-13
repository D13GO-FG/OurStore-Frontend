import React, { useContext } from 'react';
import Product from './Product';

const ListOfCheckout = ({ products }) => {
	return (
		<div className="grid grid-cols-4 gap-4">
			{products.map((product) => {
				return (
					<Product
						key={product.updatedAt + product.name}
						product={product}
						productId={product._id}
					/>
				);
			})}
		</div>
	);
};

export default ListOfCheckout;
