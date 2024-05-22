const Transaction = require('../models/paymenttranscation')
const { v4: uuidv4 } = require('uuid');

const submitPayment = async (req, res, next) => {
  try {
    const { username, useramount } = req.body;
    const transactionId = uuidv4();

    const newTransaction = new Transaction({ username, useramount, transactionId });
    await newTransaction.save();
    res.status(201).send(newTransaction);
  } catch (error) {
    next(error);
  }
};

const viewTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).send(transactions);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitPayment,
  viewTransactions
};