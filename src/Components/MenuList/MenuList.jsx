import MenuListItem from '../MenuListItem/MenuListItem';
import styles from './MenuList.module.css';
// console.log('styles:', styles);

export default function MenuList(props) {
	return (
		// combinning css module styling with template literal to add more style
		<div className={`${styles.div} btn btn-default`}>
			Menulist
			{props.menuItems.map((m, i) => (
				<MenuListItem
					// name={m.name}
					// price={m.price}
					// emoji={m.emoji}
					key={`menuItem-${m}${i}`}
					item={m}
					handleAddToCart={props.handleAddToCart}
				/>
			))}
		</div>
	);
}
