const { Schema, model } = require('mongoose');

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  brand: {
    type: String,
    required: true,
  },
  govNumber: {
    type: String,
    required: true,
    unique: true,
  },
  techEndDate: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
    required: true,
  },
});

module.exports = model('Car', schema);
