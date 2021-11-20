const express = require('express');
const router = express.Router();

router.get('/:teamID', require('./teamCheckGET'));
router.post('/', require('./teamInfoPOST'));

module.exports = router;