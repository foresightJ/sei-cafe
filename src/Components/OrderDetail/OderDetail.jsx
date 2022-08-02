import React from 'react';
import LineItem from '../LineItem/LineItem';
import './OrderDetail.css';

function OrderDetail(props) {
	// this is a normal javascript comment intended to inform you that
	// you can do calculations and declare variables above the return statement!
	let todaysDate = new Date().toLocaleDateString();

	return (
		<div className='OrderDetail'>
			<div className='section-heading'>
				<span className='smaller'>ORDER #{props.currentOrderId}</span>
				{/** This is a JSX comment! */}
				<span className='smaller'>{todaysDate}</span>
			</div>

			{/* lineItems is standard lingo meaning shopping cart items  */}
			<div className='section-heading'>lineItems</div>

			<div className='line-item-container flex-ctr-ctr flex-col scroll-y'>
				{props.lineItems.map((item, i) => (
					<LineItem
						key={`lineItem-${item}${i}`}
						qty={item.qty}
						item={item.item}
						handleItemQty={props.handleItemQty}
					/>
				))}
				<section className='total'>
					<button className='btn-sm' onClick={() => props.handleCheckOut()}>
						{/* onClick={props.handleCheckOut} */}
						CHECKOUT
					</button>
					<span>${props.orderTotal}</span>
				</section>
				<div>Paid: {props.isPaid ? 'Yes' : 'No'}</div>
			</div>
		</div>
	);
}

export default OrderDetail;
