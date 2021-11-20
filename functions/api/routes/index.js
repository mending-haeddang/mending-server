const express = require('express');
const router = express.Router();

// 이렇게 쓰면 됩니다 ~
// router.use('/user', require('./user'));
router.use('/melting', require('./melting'))
router.use('/member', require('./member'))
module.exports = router;