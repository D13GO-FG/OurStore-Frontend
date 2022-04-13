const SERVER_URL = `${process.env.REACT_APP_API_URL}`;

export const saveCheckout = async (checkout) => {
	try {
		const response = await fetch(SERVER_URL + '/checkout', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(checkout),
		});
		if (response.status === 201) return await response.json();
		else return false;
	} catch (error) {
		console.log(error);
	}
};
