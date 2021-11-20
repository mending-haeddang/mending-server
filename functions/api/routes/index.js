const express = require('express');
const router = express.Router();

router.use('/leader', require('./leader'));
router.use('/melting', require('./melting'))
router.use('/member', require('./member'))
module.exports = router;