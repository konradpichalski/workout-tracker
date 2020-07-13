const express = require('express');
const router = express.Router();

// @route     GET api/trainingplan
// @desc      Test route
// @access    Public
router.get('/', (req, res) => res.send('TrainingPlan route'));

module.exports = router;
