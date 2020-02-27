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
  instructors: [
    {
      instructor: {
        type: Schema.Types.ObjectId,
        ref: 'Instructor',
      },
    },
  ],
  shedule: [
    {
      date: {
        type: Date,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      instructor: {
        type: Schema.Types.ObjectId,
        ref: 'Instructor',
        required: true,
      },
      student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
      },
      lessonType: {
        type: String,
        required: true,
      },
    },
  ],
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
