const mongoose = require('mongoose');

const TrainingPlanSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  exercises: [
    {
      id: {
        type: String,
        required: true,
      },
      _id: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = TrainingPlan = mongoose.model(
  'trainingplan',
  TrainingPlanSchema,
);
