const { Schema, model } = require('mongoose');

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group'
  },
  car: {
    type: Schema.Types.ObjectId,
    ref: 'Car'
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student'
  },
  fullName: {
    type: String,
    required: true
  },
  sertificateEndDate: {
    type: Date,
    requred: true
  },
  categories: {
    type: [String],
    required: true
  },
  daysOff: {
    type: [String]
  }
});

module.exports = model('Instructor', schema);
