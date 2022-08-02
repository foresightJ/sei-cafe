const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
	{
		lineItems: [
			{
				qty: Number,
				item: { name: String, emoji: String, category: String, price: Number },
			},
		],
	},
	{ timestamps: true }
);

// .modle compiles the schema into a model
let OrderModel = mongoose.model('Order', orderSchema);
// export model
module.exports = OrderModel;
