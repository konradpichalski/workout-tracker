const express = require('express');
const router = express.Router();

// @route     GET api/exerciseplan
// @desc      Test route
// @access    Public
router.get('/', (req, res) => res.send('ExercisePlan route'));

module.exports = router;
