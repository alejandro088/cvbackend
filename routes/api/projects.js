const express = require('express');
const router = express.Router();

const projectModel = require('../../models/projects');

router.get('/', (req, res) => {
	let project = new projectModel();
	project.title = 'Test project';

	project.save().then((data) => {
		console.log(data);
	}).catch(err => {
		console.log(err);
	})

	res.send('Hello from Api Project.')
});

module.exports = router;