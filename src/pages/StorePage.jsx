import React from 'react';
import ListoOfProducts from '../components/ListoOfProducts';

const StorePage = ({ allProducts }) => {
	return (
		<>
			<ListoOfProducts products={allProducts} />
		</>
	);
};

export default StorePage;
