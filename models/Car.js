const { Schema, model } = require('mongoose');

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  instructors: [
    {
      instructor: {
        type: Schema.Types.ObjectId,
        ref: 'Instructor'
      }
    }
  ],
  brand: {
    type: String,
    required: true
  },
  govNumber: {
    type: String,
    required: true
  },
  techEndDate: {
    type: Date,
    requred: true
  },
  category: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true,
    required: true
  }
});

module.exports = model('Instructor', schema);
