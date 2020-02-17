const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  shedule: [
    {
      date: {
        type: Date,
        required: true
      },
      time: {
        type: String,
        required: true
      },
      instructor: {
        type: Schema.Types.ObjectId,
        ref: 'Instructor',
        required: true
      },
      student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
      },
      lessonType: {
        type: String,
        required: true
      }
    }
  ],
  active: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = model('shedule', schema);
