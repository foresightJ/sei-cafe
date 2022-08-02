import './MenuListItem.css';

export default function MenuListItem(props) {
	return (
		<div className='MenuListItem'>
			<div className='emoji flex-ctr-ctr'>{props.item.emoji}</div>
			<div className='name'>{props.item.name}</div>
			<div className='buy'>
				<span>{props.item.price}</span>
				<button
					className='btn-sm'
					// onClick={() => alert('add to cart coming soon!')}
					// onClick={() => props.handleAddToCart()}
					onClick={() => props.handleAddToCart(props.item)}
				>
					ADD
				</button>
			</div>
		</div>
	);
}
