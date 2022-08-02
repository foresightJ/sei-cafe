import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
	return (
		<div>
			<h1>LoginPage</h1>
			{/* <h1>{this.props.match.params.num}</h1> */}
			<Link to='/orders/new'>New Order</Link>
			<br />
			<Link to='/orders'>Previous Order</Link>
		</div>
	);
}
