import React from 'react';
import Product from './Product';

const ListoOfProducts = ({ products }) => {
	return (
		<>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
			</div>
		</>
	);
};

export default ListoOfProducts;
