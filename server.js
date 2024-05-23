const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/paymentpage');

const app = express();
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json());


app.use('/api/payments', paymentRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

// Database connection
mongoose.connect('mongodb://localhost:27017/swio-assignment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(7000, () => {
    console.log('Server is running on port 7000');
  });
}).catch(err => {
  console.error('Database connection error', err);
});