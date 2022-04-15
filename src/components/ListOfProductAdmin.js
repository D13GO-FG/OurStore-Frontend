import React from 'react';
import ProductAdmin from './ProductAdmin';

const ListOfProductAdmin = ({ products, onDelete }) => {
	return (
		<>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">
					{products.map((product) => {
						return (
							<ProductAdmin
								key={product.updatedAt + product.name}
								product={product}
								productId={product._id}
								onDelete={onDelete}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default ListOfProductAdmin;
