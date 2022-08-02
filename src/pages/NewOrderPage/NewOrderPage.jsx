import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../App.css';
import Logo from '../../Components/Logo/Logo';
import CategoryList from '../../Components/CategoryList/CategoryList';
import UserLogOut from '../../Components/UserLogOut/UserLogOut';
import MenuList from '../../Components/MenuList/MenuList';
import OrderDetail from '../../Components/OrderDetail/OderDetail';
// import NewOrderPage from './pages/NewOrderPage/NewOrderPage';

class NewOrderPage extends Component {
	// Application State
	state = {
		name: 'Foresight',
		email: 'foresight400@gmail.com',
		isPaid: false,
		currentOrderId: 44444,
		orderTotal: 0,
		cartItems: [],
		menuCategories: [
			'Snacks',
			'Drinks',
			'Street Food',
			'Soups',
			'African Salad',
			'Smoothies and Fruits',
		],
		menuItems: [
			{
				id: '0',
				name: 'Bole',
				price: 30.45,
				emoji: '🥘',
				category: 'Street Food',
			},
			{
				id: '1',
				name: 'Suya',
				price: 20.25,
				emoji: '🥓',
				category: 'Street Food',
			},
			{
				id: '2',
				name: 'Puff-Puff',
				price: 5.25,
				emoji: '🥟',
				category: 'Snacks',
			},
		],
		activeCategory: 'Street Food',
		lineItems: [
			{
				qty: 2,
				item: {
					id: '0',
					name: 'Bole',
					price: 30.45,
					emoji: '🥘',
					category: 'Street Food',
				},
			},
			{
				qty: 3,
				item: {
					id: '1',
					name: 'Puff-Puff',
					price: 5.25,
					emoji: '🥟',
					category: 'Street Food',
				},
			},
			{
				qty: 4,
				item: {
					id: '3',
					name: 'Suya',
					price: 20.25,
					emoji: '🥓',
					category: 'Street Food',
				},
			},
		],
	};
	handleLogOut = () => {
		this.setState({ name: '' });
	};
	// handleCheckOut = () => {
	// 	this.setState({ isPaid: true });
	// };

	handleCheckOut = async () => {
		try {
			let fetchResponse = await fetch('/api/orders', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ lineItems: this.state.lineItems }),
			}); /** <-- send this object to server*/
			let serverResponse =
				await fetchResponse.json(); /** <-- decode fetch response*/
			console.log('Success', serverResponse); /** <-- log server response*/
			// if the orderwas sent over without errors, set state to empty
			this.setState({ lineItems: [] });
		} catch (err) {
			console.log('Error:', err); /** <-- log if error*/
		}
	};
	handleAddToCart = (item) => {
		// add item to cart === lineItems
		// 1st. we build an object that follows the same syntax/signature of our cart obj
		let lineItemObj = {
			qty: 1,
			item,
		};
		// we do not mutate but make a copy of reference data types (lineItems is an array)
		let lineItemsCopy = [...this.state.lineItems, lineItemObj];
		// call setState to lineItemsCopy to update state
		this.setState({ lineItems: lineItemsCopy });
		// // checking if the cart (lineitems array) already has the target item using a loop
		// for (let t of tempItems) {
		// 	// alert(t.item.id);
		// 	// if true
		// 	if (t.item.id === id) {
		// 		// increase quantity, update state, and terminate function
		// 		t.qty++;
		// 		this.setState({ lineItems: tempItems });
		// 	} else {
		// 		// esle push the target item to the cart (lineItems array) and update state
		// 		tempItems.push(t);
		// 	}
		// }
	};
	handleItemQty = () => {
		alert('coming soon');
	};
	render() {
		return (
			<>
				<nav className='nav'>
					{/* <Route path='/extralogo' render={(props) => <Logo {...props} />} /> */}
					{/* <Route path='/extralogo'>
						<Logo {...this.props} />
					</Route> */}
					<Logo />
					<CategoryList categories={this.state.menuCategories} />
					<Link to='/orders' className='button btn-sm'>
						ORDER HISTORY
					</Link>
					<UserLogOut
						{...this.props}
						name={this.state.name}
						email={this.state.email}
						handleLogOut={this.handleLogOut}
					/>
				</nav>
				<MenuList
					menuItems={this.state.menuItems}
					handleAddToCart={this.handleAddToCart}
				/>
				<OrderDetail
					lineItems={this.state.lineItems}
					orderTotal={this.state.orderTotal}
					isPaid={this.state.isPaid}
					currentOrderId={this.state.currentOrderId}
					handleCheckOut={this.handleCheckOut}
					handleItemQty={this.handleItemQty}
				/>
			</>
		);
	}
}

export default NewOrderPage;
