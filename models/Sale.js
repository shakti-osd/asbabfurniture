const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SaleSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  order: {
    type: Object,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Sale = mongoose.model('sale', SaleSchema);
