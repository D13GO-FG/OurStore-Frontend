import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import StorePage from './pages/StorePage';
import {
	deleteProduct,
	getProducts,
	saveProduct,
	updateProduct,
} from './api/productsApi';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import AdminPage from './pages/AdminPage';
import CreateProductPage from './pages/CreateProductPage';
import { StoreProvider } from './context/storeContext';
import CheckoutPage from './pages/CheckoutPage';

function App() {
	const [allProducts, setAllProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		getAllProducts();
	}, []);

	const getAllProducts = async () => {
		const products = await getProducts();
		setAllProducts(products);
	};

	const handleOnSave = async (product) => {
		const savedProduct = await saveProduct(product);
		if (savedProduct) setAllProducts([...allProducts, savedProduct]);
		navigate('/admin', { replace: true });
	};

	const handleOnEdit = async (productId, product) => {
		const editedProduct = await updateProduct(productId, product);
		if (editedProduct) {
			const copyOfProduct = Array.from(allProducts);
			const result = copyOfProduct.filter((product) => product._id !== productId);
			setAllProducts([...result, editedProduct]);
		}
		navigate('/admin', { replace: true });
	};

	const handleOnDelete = async (productId) => {
		const isDeleted = await deleteProduct(productId);
		if (isDeleted) {
			const copyOfProduct = Array.from(allProducts);
			const result = copyOfProduct.filter((product) => product._id !== productId);
			setAllProducts(result);
			navigate('/admin', { replace: true });
		}
	};

	return (
		<div className="App">
			<StoreProvider>
				<NavBar />
				<Routes>
					<Route index element={<StorePage allProducts={allProducts} />} />
					<Route path="/checkout" element={<CheckoutPage />} />
					<Route
						path="/admin"
						element={
							<AdminPage allProducts={allProducts} onDelete={handleOnDelete} />
						}
					/>
					<Route
						path="/admin/create-product"
						element={<CreateProductPage onSave={handleOnSave} />}
					/>
					<Route
						path="/admin/create-product/:productId"
						element={<CreateProductPage onSave={handleOnEdit} />}
					/>
					<Route path="/admin/:productId" element={handleOnDelete} />
				</Routes>

				<Footer />
			</StoreProvider>
		</div>
	);
}

export default App;
