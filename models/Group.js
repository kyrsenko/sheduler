const { Schema, model } = require('mongoose');

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  students: [
    {
      student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
      },
    },
  ],
  cars: [
    {
      car: {
        type: Schema.Types.ObjectId,
        ref: 'Car',
      },
    },
  ],
  instructors: [
    {
      instructor: {
        type: Schema.Types.ObjectId,
        ref: 'Instructor',
      },
    },
  ],
  shedule: [],
  active: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Group', schema);
