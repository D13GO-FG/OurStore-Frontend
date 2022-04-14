import { createContext, useState } from 'react';
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
	const [listProducts, setListProducts] = useState([]);
	// useEffect(() => {
	// 	setListProducts(listProducts);
	// }, [listProducts]);

	// const addToCarShop = (product) => {
	//   const {_id} = product;
	// 		const copyOfProduct = Array.from(listProducts);
	// 		const result = copyOfProduct.filter((product) => product._id !== _id);
	// 		setListProducts([...result, product]);
	// }
	return (
		<StoreContext.Provider value={{ listProducts, setListProducts }}>
			{children}
		</StoreContext.Provider>
	);
};
