import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderHistoryPage(props) {
	return (
		<div>
			<h1>Order History Page</h1>
			<br />
			<Link to='/orders/new'>New Order</Link>
			<button onClick={() => props.history.push('/login/7')}>Login</button>
		</div>
	);
}
