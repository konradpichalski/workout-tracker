const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectById');

const TrainingPlan = require('../../models/TrainingPlan');
const ExercisePlan = require('../../models/ExercisePlan');

// @route     GET api/trainingplan
// @desc      Get training plans
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    // find an exercise with id for the right user
    const trainingPlans = await TrainingPlan.find({
      user: req.user.id,
    });

    console.log(trainingPlans, req.user.id);

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

// @route     GET api/trainingplan/:id
// @desc      Get training plan by id
// @access    Private
router.get('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    // find a training plan with id for the right user
    const trainingPlan = await TrainingPlan.findOne({
      user: req.user.id,
      _id: req.params.id,
    });

    if (!trainingPlan) {
      return res
        .status(400)
        .json({ msg: 'There is no training plan for this user with this id' });
    }

    // query all the exercises based on ids in the training plan >> exercises array
    const exercises = await ExercisePlan.find({
      _id: {
        $in: trainingPlan.exercises.map(({ exercisePlanId }) => exercisePlanId),
      },
    });

    const updatedTrainingPlan = {
      trainingPlan,
      exercises,
    };

    res.json(updatedTrainingPlan);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route     POST api/trainingplan/:id
// @desc      Update training plan by id
// @access    Private
router.post(
  '/:id',
  [
    auth,
    checkObjectId('id'),
    check('name', 'Training plan name is required').not().isEmpty(),
    check('exercises', 'Exercises are required').not().isEmpty(),
  ],
  async (req, res) => {
    // Validate required fields first and check for errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const trainingPlanData = {
      user: req.user.id,
      name: req.body.name,
      _id: req.params.id,
      exercises: req.body.exercises,
    };

    try {
      // User upsert option (creates new doc if no match is found)
      const updatedTrainingPlan = await TrainingPlan.findOneAndUpdate(
        { user: req.user.id, _id: req.params.id },
        { $set: trainingPlanData },
        { new: true, upsert: true },
      );

      res.json(updatedTrainingPlan);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },
);

// @route     DELETE api/trainingplan/:id
// @desc      Delete training plan by id
// @access    Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    await TrainingPlan.findOneAndRemove({
      user: req.user.id,
      _id: req.params.id,
    });

    res.json({ msg: 'Training plan deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
