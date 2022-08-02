import React from 'react';
import './UserLogOut.css';

export default function UserLogOut(props) {
	return (
		<div className='UserLogOut'>
			<div>Name: {props.name}</div>
			<div>Email: {props.email}</div>
			{/* <button className='btn-sm' onClick={() => props.handleLogOut()}>  */}
			<button className='btn-sm' onClick={() => props.history.push('/')}>
				Logout
			</button>
		</div>
	);
}
