const express = require('express');
const router = express.Router();

// @route     GET api/calendar
// @desc      Test route
// @access    Public
router.get('/', (req, res) => res.send('Calendar route'));

module.exports = router;
