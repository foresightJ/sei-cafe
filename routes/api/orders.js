// routes/api/orders.js

const express = require('express');
const router = express.Router();
const orderCtrl = require('../../controllers/orders');

// Route handler for POSTing a new order. Full address will be POST /api/orders
router.post('/', orderCtrl.create);

module.export = router
