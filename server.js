const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect database
connectDB();

app.get('/', (req, res) => res.send('API running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/calendars', require('./routes/api/calendars'));
app.use('/api/workouts', require('./routes/api/workouts'));
app.use('/api/exercises', require('./routes/api/exercises'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
