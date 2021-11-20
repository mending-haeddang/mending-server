const express = require('express');
const router = express.Router();

router.post('/answer', require('./answerPOST'));
router.get('/answer/:questionID', require('./answerListGET'));


module.exports = router;