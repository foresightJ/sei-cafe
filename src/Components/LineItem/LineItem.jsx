import './LineItem.css';

export default function LineItem(props) {
	return (
		<div className='LineItem'>
			<div className='flex-ctr-ctr'>{props.item.emoji}</div>
			<div className='flex-ctr-ctr flex-col'>
				<span className='align-ctr'>{props.item.name}</span>
				<span>${props.item.price}</span>
			</div>
			<div className='qty' style={{ justifyContent: 'center' }}>
				<button className='btn-xs' onClick={() => props.handleItemQty()}>
					-
				</button>
				<span>{props.qty}</span>
				<button className='btn-xs' onClick={() => props.handleItemQty()}>
					+
				</button>
			</div>
			<div className='ext-price'>${(props.qty * props.item.price).toFixed(2)}</div>
		</div>
	);
}
