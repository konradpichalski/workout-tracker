const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const ExercisePlan = require('../../models/ExercisePlan');

// @route     GET api/exerciseplan
// @desc      Get exercise plans
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const exercisePlans = await ExercisePlan.find({
      user: req.user.id,
    });

    if (!exercisePlans) {
      return res
        .status(400)
        .json({ msg: 'There is no exercise plan for this user' });
    }

    res.json(exercisePlans);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
