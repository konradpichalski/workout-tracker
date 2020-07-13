const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

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

// @route     POST api/exerciseplan
// @desc      Add exercise plan
// @access    Private
router.post(
  '/',
  [
    auth,
    check('name', 'Exercise name is required').not().isEmpty(),
    check('sets', 'Sets are required').not().isEmpty(),
  ],
  async (req, res) => {
    // Validate required fields first and check for errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, sets } = req.body;

      const newExercisePlan = new ExercisePlan({
        user: req.user.id,
        name,
        sets,
      });

      const exercisePlan = await newExercisePlan.save();

      res.json(exercisePlan);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  },
);

module.exports = router;
