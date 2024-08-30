// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const budgetRoutes = require('./routes/budget');
const cors = require('cors')


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://kharemanya10:1234@cluster0.sygzx.mongodb.net/DB',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

app.use('/auth', authRoutes);
app.use('/budget', budgetRoutes);

app.get("/messages", (req, res) => {
	res.send("Hello");
 });

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
