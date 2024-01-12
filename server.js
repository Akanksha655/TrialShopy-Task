const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const commissionRoutes = require('./routes/commissionRoutes');
const paymentsRoutes = require('./routes/paymentsRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());
app.use(session({ secret: 'your_secret_key', resave: true, saveUninitialized: true }));

// Routes
app.use('/auth', authRoutes);
app.use('/api/merchants', commissionRoutes);
app.use('/api/merchants', paymentsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
