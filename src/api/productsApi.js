const SERVER_URL = `${process.env.REACT_APP_API_URL}`;

export const getProducts = async () => {
	try {
		const response = await fetch(SERVER_URL);
		if (response.status === 200) return await response.json();
		else return [];
	} catch (error) {
		console.log(error);
	}
};

export const saveProduct = async (product) => {
	try {
		const response = await fetch(SERVER_URL + '/admin', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(product),
		});
		if (response.status === 201) return await response.json();
		else return false;
	} catch (error) {
		console.log(error);
	}
};

export const getProduct = async (id) => {
	try {
		const response = await fetch(SERVER_URL + `/admin/${id}`);
		if (response.status === 200) return await response.json();
		else return false;
	} catch (error) {
		console.log(error);
	}
};

export const updateProduct = async (id, product) => {
	try {
		const response = await fetch(SERVER_URL + `/admin/${id}`, {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(product),
		});
		if (response.status === 200) return await response.json();
		else return false;
	} catch (error) {
		console.log(error);
	}
};

export const deleteProduct = async (id) => {
	try {
		const response = await fetch(SERVER_URL + `/admin/${id}`, {
			method: 'DELETE',
		});
		return response.status === 204;
	} catch (error) {
		console.log(error);
	}
};
