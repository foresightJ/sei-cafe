import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import LoginPage from './pages/LoginPage/LoginPage';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Route
						path='/orders/new'
						render={(props) => <NewOrderPage {...props} />}
					/>
					<Route
						path='/orders'
						render={(props) => <OrderHistoryPage {...props} />}
					/>
					<Route path='/login/:num' render={(props) => <LoginPage {...props} />} />
					<Redirect to='/orders' />
				</Switch>
			</div>
		);
	}
}

export default App;
