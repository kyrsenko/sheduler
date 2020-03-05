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
      process: {
        indoor: {
          type: String,
          default: 20,
        },
        outdoor: {
          type: String,
          default: 25,
        },
        withTrailer: {
          type: String,
          default: 10,
        },
        theory: {
          type: String,
          default: 40,
        },
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
