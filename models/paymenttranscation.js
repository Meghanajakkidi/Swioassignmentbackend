const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  useramount: {
    type: Number,
    required: true
  },
  transactionId: {
    type: String,
    required: true,
    unique: true
  }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;