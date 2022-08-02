const OrderModel = require('../models/order.js');

module.exports = {
	create,
};

async function create(req, res) {
	try {
		// 1. put the order in the database (the data will be incoming via req.body)
		await OrderModel.create({ lineItems: req.body.lineItems });
		// 2.send a response to frontend - typically we send back the newly created order, or all the list of orders or just an "Ok"
		res.status(200).json('ok. Order added to DB!');
	} catch (err) {
		res.json(err);
	}
}
