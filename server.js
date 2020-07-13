const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

// Define routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/calendar', require('./routes/api/calendar'));
app.use('/api/trainingPlan', require('./routes/api/trainingPlan'));
app.use('/api/exercisePlan', require('./routes/api/exercisePlan'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
