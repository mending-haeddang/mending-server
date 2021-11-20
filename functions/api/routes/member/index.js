const express = require('express');
const router = express.Router();

router.post('/code', require('./codePost'));


module.exports = router;