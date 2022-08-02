const mongoose = require('mongoose');

mongoose.connect(process.env.DATABSE_URL, {
	useNewUrlParser: true,
	// useCreateIndex: true,
	useUnifiedTopology: true,
	// useFindAndModify: false,
});

const db = mongoose.connection;

db.on('connected', function () {
	console.log(`Connected to ${db.name} at ${db.host}:{db.port}`);
});
