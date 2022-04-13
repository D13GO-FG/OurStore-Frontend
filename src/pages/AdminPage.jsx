import React from 'react';
import ListOfProductAdmin from '../components/ListOfProductAdmin';
import { Link } from 'react-router-dom';

const AdminPage = ({ allProducts, onDelete }) => {
	return (
		<>
			<div>
				<Link to={'/admin/create-product'}>Add new product</Link>
			</div>
			<ListOfProductAdmin products={allProducts} onDelete={onDelete} />
		</>
	);
};

export default AdminPage;
