const mongoose = require('mongoose');

const ExercisePlanSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  description: {
    type: String,
  },
  sets: [
    {
      repRange: {
        from: {
          type: Number,
          required: true,
        },
        to: {
          type: Number,
          required: true,
        },
      },
      rest: {
        min: {
          type: Number,
          required: true,
        },
        sec: {
          type: Number,
          required: true,
        },
      },
    },
  ],
});

module.exports = ExercisePlan = mongoose.model(
  'exerciseplan',
  ExercisePlanSchema,
);
