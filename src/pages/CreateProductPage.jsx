import React, { useEffect, useState } from 'react';
import CreateProduct from '../components/CreateProduct';
import { useParams } from 'react-router-dom';
import { getProduct } from '../api/productsApi';

const CreateProductPage = ({ onSave }) => {
	const params = useParams();
	const { productId } = params;

	const [product, setProduct] = useState();

	useEffect(() => {
		getProductWithId(productId);
	}, [productId]);

	const getProductWithId = async (id) => {
		if (id) {
			const product = await getProduct(id);
			if (product) setProduct(product);
		}
	};

	return <CreateProduct product={product} onSave={onSave} />;
};

export default CreateProductPage;
