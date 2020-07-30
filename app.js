const express = require('express');
const app = express();

require('dotenv').config();
require('./db.js');

const apiRouter = require('./routes/api.js');

app.use('/api', apiRouter);

//routes
app.get('/', (req, res) => {
	res.send('Hello world from express!!!')
})

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
	console.log(`listen server on port ${PORT}!`)
})