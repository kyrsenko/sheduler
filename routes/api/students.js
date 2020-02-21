const { Router } = require('express');
const router = Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');

const Car = require('../../models/Car');
const Instructor = require('../../models/Instructor');
const Student = require('../../models/Student');

// @route    POST api/students
// @desc     Create/edit a student
// @access   Private

router.post(
  '/',
  [
    auth,
    [
      check('fullName', 'Name is required')
        .not()
        .isEmpty(),
      check('dateOfBirth', 'Sertificate end date is required')
        .not()
        .isEmpty(),
      check('passport', 'Passport serial number is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      fullName,
      group,
      passport,
      instructor,
      dateOfBirth,
      theory,
      indoor,
      outdoor,
      withTrailer,
    } = req.body;

    const studentFields = {};
    const process = {};

    if (fullName) {
      studentFields.fullName = fullName;
    }
    if (passport) {
      studentFields.passport = passport;
    }
    if (instructor) {
      studentFields.instructor = instructor;
    }
    if (group) {
      studentFields.group = group;
    }
    if (dateOfBirth) {
      studentFields.dateOfBirth = dateOfBirth;
    }

    if (theory) {
      process.theory = theory;
    }
    if (indoor) {
      process.indoor = indoor;
    }
    if (outdoor) {
      process.outdoor = outdoor;
    }
    if (withTrailer) {
      process.withTrailer = withTrailer;
    }

    studentFields.process = process;

    try {
      let student = await Student.findOneAndUpdate(
        { user: req.user.id, passport: req.body.passport },
        {
          $set: {
            user: req.user.id,
            ...studentFields,
          },
        },
        { new: true, upsert: true }
      );

      await student.save();
      res.json(student);
    } catch (error) {
      console.error(error.message);

      if (error.codeName === 'DuplicateKey') {
        return res
          .status(400)
          .json({ errors: { msg: 'Passport serial number already used' } });
      }

      res.status(500).json('Server error');
    }
  }
);

// @route    GET api/students
// @desc     Get all students of current user
// @access   Private

router.get('/', auth, async (req, res) => {
  try {
    const students = await Student.find({
      user: req.user.id,
    }).populate('user', ['name']);

    if (!students.length) {
      return res
        .status(400)
        .json({ errors: { msg: 'There are no students for this company' } });
    }

    res.json(students);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/students/:id
// @desc     Get student by ID
// @access   Private

router.get('/:id', auth, async (req, res) => {
  try {
    const student = await Student.findOne({
      user: req.user.id,
      _id: req.params.id,
    });

    // Check for ObjectId format and student
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !student) {
      return res.status(404).json({ msg: 'Student not found' });
    }

    res.json(student);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/students/:id
// @desc     Delete student by ID
// @access   Private

router.delete('/:id', auth, async (req, res) => {
  try {
    const student = await Student.findOne({
      user: req.user.id,
      _id: req.params.id,
    });

    // Check for ObjectId format and student
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !student) {
      return res.status(404).json({ msg: 'Student not found' });
    }

    await student.remove();
    res.json({ msg: 'Student removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
