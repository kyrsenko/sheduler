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
  instructor: {
    type: Schema.Types.ObjectId,
    ref: 'Instructor'
  },
  fullName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  process: {
    theory: { type: Number},
    indoor: { type: Number},
    outdoor: { type: Number},
    withTrailer: { type: Number}
  }
});

module.exports = model('Student', schema);
