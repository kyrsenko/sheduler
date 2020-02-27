const { Schema, model } = require('mongoose');

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  fullName: {
    type: String,
    required: true,
  },
  passport: {
    type: String,
    required: true,
    unique: true,
  },
  sertificateEndDate: {
    type: Date,
    requred: true,
  },
  categories: {
    type: [String],
    required: true,
  },
  daysOff: {
    type: [String],
  },
});

module.exports = model('Instructor', schema);
