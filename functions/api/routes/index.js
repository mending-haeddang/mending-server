const express = require('express');
const router = express.Router();

router.use('/leader', require('./leader'));

module.exports = router;