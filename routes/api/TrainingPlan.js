const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');

const TrainingPlan = require('../../models/TrainingPlan');

// @route     GET api/trainingplan
// @desc      Get training plans
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    // find an exercise with id for the right user
    const trainingPlans = await TrainingPlan.find({
      user: req.user.id,
    });

    if (!trainingPlans) {
      return res
        .status(400)
        .json({ msg: 'There is no training plan for this user' });
    }

    res.json(trainingPlans);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route     POST api/trainingplan
// @desc      Add training plan
// @access    Private
router.post(
  '/',
  [
    auth,
    check('name', 'Training plan name is required').not().isEmpty(),
    check('exercises', 'Exercises are required').not().isEmpty(),
  ],
  async (req, res) => {
    // Validate required fields first and check for errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, exercises } = req.body;
      const newTrainingPlan = new TrainingPlan({
        user: req.user.id,
        name,
        exercises,
      });

      await newTrainingPlan.save();

      res.json(newTrainingPlan);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  },
);

module.exports = router;
