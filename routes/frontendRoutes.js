const express = require('express');
const { getFrontend } = require('../controllers/frontendRouteControllers');
const router = express.Router();

router.get('/', getFrontend);

module.exports = router;
