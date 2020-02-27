const { Router } = require('express');
const router = Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');

const Car = require('../../models/Car');
const Instructor = require('../../models/Instructor');
const Student = require('../../models/Student');
const Group = require('../../models/Group');

// @route    POST api/groups
// @desc     Create group
// @access   Private

router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
      check('startDate', 'Start date is required')
        .not()
        .isEmpty(),
      check('endDate', 'End date is required')
        .not()
        .isEmpty(),
      check('active', 'Activity status is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, startDate, endDate, active } = req.body;

    try {
      let group = await Group.findOne({
        user: req.user.id,
        name: req.body.name,
      });

      if (group) {
        return res.status(400).json({ msg: 'Group already exists' });
      }

      group = new Group({
        user: req.user.id,
        name,
        startDate,
        endDate,
        active,
      });

      await group.save();
      res.json(group);
    } catch (error) {
      console.error(error.message);
      res.status(500).json('Server error');
    }
  }
);

// @route    PUT api/groups/:id
// @desc     Edit group
// @access   Private

router.put(
  '/:id',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
      check('startDate', 'Start date is required')
        .not()
        .isEmpty(),
      check('endDate', 'End date is required')
        .not()
        .isEmpty(),
      check('active', 'Activity status is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, startDate, endDate, active } = req.body;

    const groupFields = {};

    if (name) {
      groupFields.name = name;
    }
    if (startDate) {
      groupFields.startDate = startDate;
    }
    if (endDate) {
      groupFields.endDate = endDate;
    }
    if (active) {
      groupFields.active = active;
    }

    try {
      let group = await Group.findOne({
        user: req.user.id,
        _id: req.params.id,
      });

      if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !group) {
        return res.status(404).json({ msg: 'Group not found' });
      }

      group = await Group.findOneAndUpdate(
        { user: req.user.id, _id: req.params.id },
        {
          $set: {
            ...groupFields,
          },
        },
        { new: true }
      );

      await group.save();
      res.json(group);
    } catch (error) {
      console.error(error.message);

      if (error.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Group not found' });
      }

      res.status(500).json('Server error');
    }
  }
);

// @route    GET api/groups
// @desc     Get all groups of current user
// @access   Private

router.get('/', auth, async (req, res) => {
  try {
    const groups = await Group.find({
      user: req.user.id,
    }).populate('user', ['name']);

    if (!groups.length) {
      return res
        .status(404)
        .json({ errors: { msg: 'There are no groups for this company' } });
    }

    res.json(groups);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/groups/:id
// @desc     Get group by ID
// @access   Private

router.get('/:id', auth, async (req, res) => {
  try {
    const group = await Group.findOne({
      user: req.user.id,
      _id: req.params.id,
    }).populate('user', ['name']);

    // Check for ObjectId format and group
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !group) {
      return res.status(404).json({ msg: 'Group not found' });
    }

    res.json(group);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Group not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/groups/:id
// @desc     Delete group by ID
// @access   Private

router.delete('/:id', auth, async (req, res) => {
  try {
    const group = await Group.findOne({
      user: req.user.id,
      _id: req.params.id,
    });

    // Check for ObjectId format and group
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !group) {
      return res.status(404).json({ msg: 'Group not found' });
    }

    await group.remove();
    res.json({ msg: 'Group removed' });
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Group not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    GET api/groups/:group_id/students
// @desc     Get all students of group by ID
// @access   Private

router.get('/:group_id/students', auth, async (req, res) => {
  try {
    const students = await Student.find({
      user: req.user.id,
      group: req.params.group_id,
    })
      .populate('user', ['name'])
      .populate('group', ['name'])
      .populate('instructor', ['fullName']);

    if (!req.params.group_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ msg: 'Group not found' });
    }

    if (!students.length) {
      return res
        .status(404)
        .json({ msg: 'There are no students in this group' });
    }

    res.json(students);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/groups/:group_id/instructors
// @desc     Get all instructors of group by ID
// @access   Private

router.get('/:group_id/instructors', auth, async (req, res) => {
  try {
    const instructors = await Student.find({
      user: req.user.id,
      group: req.params.group_id,
    }).populate('user', ['name']);

    if (!req.params.group_id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ msg: 'Group not found' });
    }

    if (!instructors.length) {
      return res
        .status(404)
        .json({ msg: 'There are no instructors in this group' });
    }

    res.json(instructors);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
