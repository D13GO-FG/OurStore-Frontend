import React from 'react';
import ProductAdmin from './ProductAdmin';

const ListOfProductAdmin = ({ products, onDelete }) => {
	return (
		<>
			<div className="grid grid-flow-row auto-rows-max">
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
		</>
	);
};

export default ListOfProductAdmin;
