import React from 'react';
import ListOfProductAdmin from '../components/ListOfProductAdmin';
import { Link } from 'react-router-dom';

const AdminPage = ({ allProducts, onDelete }) => {
	return (
		<>
			<div className="pb-5">
				<Link
					to={'/admin/create-product'}
					className="text-black bg-green-500 hover:bg-green-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700"
				>
					Add new product
				</Link>
			</div>
			<ListOfProductAdmin products={allProducts} onDelete={onDelete} />
		</>
	);
};

export default AdminPage;
