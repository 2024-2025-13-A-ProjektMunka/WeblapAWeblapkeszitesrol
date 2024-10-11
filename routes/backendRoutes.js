const express = require('express');
const { getBackend } = require('../controllers/backendRouteControllers');
const router = express.Router();

router.get('/', getBackend);

module.exports = router;
