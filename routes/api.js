const express = require('express');
const router = express.Router();


const apiRouterProjects = require('./api/projects.js');

router.use('/projects', apiRouterProjects);

module.exports = router;