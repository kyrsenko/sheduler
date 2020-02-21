const { Schema, model } = require('mongoose');

const schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: 'Instructor',
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
  dateOfBirth: {
    type: Date,
    required: true,
  },
  process: {
    theory: { type: Number, default: 20 },
    indoor: { type: Number, default: 15 },
    outdoor: { type: Number, default: 10 },
    withTrailer: { type: Number, default: 5 },
  },
});

module.exports = model('Student', schema);
