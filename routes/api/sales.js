const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Sale model
const Sale = require('../../models/Sale');

// Validation
const validatePostInput = require('../../validation/sales');

// @route   POST api/sales
// @desc    Create sale
// @access  Private
router.post(
  '/',
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newSale = new Sale({
      order: req.body.order,
      user: req.body.userid
    });

    newSale.save().then(sale => res.json(sale));
  }
);


// @route   GET api/sales
// @desc    get orders
// @access  Private
router.get('/', 
passport.authenticate('jwt', { session: false }),
(req, res) => {
  Sale.find({ user: req.user.id })
    .sort({ date: -1 })
    .then(orders => res.json(orders))
    .catch(err => res.status(404).json({ orders: 'No posts found' }));
});

module.exports = router;
