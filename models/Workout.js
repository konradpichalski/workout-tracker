const mongoose = require('mongoose');

const WorkoutSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  exercises: [],
});

module.exports = Workout = mongoose.model('workout', WorkoutSchema);
