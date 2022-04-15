import React from 'react';

const ModalCheck = ({ onCheckout, checkout }) => {
	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-auto my-6 mx-auto max-w-3xl">
					{/*content*/}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						{/*header*/}
						<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
							<h3 className="text-3xl font-semibold text-center">Checkout status</h3>
						</div>
						{/*body*/}
						<div className="relative p-6 flex-auto">
							<p>Name</p>
							<p className="my-4 text-slate-500 text-lg leading-relaxed">
								{checkout.name}
							</p>
							<p>Address</p>
							<p className="my-4 text-slate-500 text-lg leading-relaxed">
								{checkout.address}
							</p>
							<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
								<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
									<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
										<tr>
											<th>Name</th>
											<th>Price</th>
										</tr>
									</thead>
									<tbody>
										{checkout.products.map((product) => {
											return (
												<tr key={product._id}>
													<td>{product.name}</td>
													<td>{`$${product.price}`}</td>
												</tr>
											);
										})}
										<tr>
											<td>Total</td>
											<td>{`$${checkout.total}`}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						{/*footer*/}
						<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
							<button
								className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => onCheckout(false)}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	);
};

export default ModalCheck;
