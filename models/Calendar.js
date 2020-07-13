const mongoose = require('mongoose');

const CalendarSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  workouts: [
    {
      id: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
    },
  ],
  currentWorkoutId: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Calendar = mongoose.model('calendar', CalendarSchema);
