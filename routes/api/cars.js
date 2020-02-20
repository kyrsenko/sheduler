const { Router } = require('express');
const router = Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');

const Car = require('../../models/Car');

// @route    POST api/cars
// @desc     Create/edit a car
// @access   Private

router.post(
  '/',
  [
    auth,
    [
      check('brand', 'Brand is required')
        .not()
        .isEmpty(),
      check('govNumber', 'License plate number is required')
        .not()
        .isEmpty(),
      check('techEndDate', 'Inspection end date is required')
        .not()
        .isEmpty(),
      check('category', 'Category is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let car = await Car.findOneAndUpdate(
        { user: req.user.id, govNumber: req.body.govNumber },
        {
          $set: {
            user: req.user.id,
            ...req.body,
          },
        },
        { new: true, upsert: true }
      );

      await car.save();
      await res.json(car);
    } catch (error) {
      console.error(error.message);

      if (error.codeName === 'DuplicateKey') {
        return res
          .status(400)
          .json({ errors: { msg: 'Duplicate license plate number' } });
      }

      res.status(500).json('Server error');
    }
  }
);

// @route    GET api/car
// @desc     Get all users cars
// @access   Private

router.get('/', auth, async (req, res) => {
  try {
    const cars = await Car.find({ user: req.user.id }).populate('user', [
      'name',
    ]);

    if (!cars.length) {
      return res
        .status(400)
        .json({ errors: { msg: 'There are no cars for this company' } });
    }

    res.json(cars);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/cars/:id
// @desc     Get car by ID
// @access   Private

router.get('/:id', auth, async (req, res) => {
  try {
    const car = await Car.findOne({ user: req.user.id, _id: req.params.id });

    // Check for ObjectId format and car
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !car) {
      return res.status(404).json({ msg: 'Car not found' });
    }

    res.json(car);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/cars/:id
// @desc     Delete car by ID
// @access   Private

router.delete('/:id', auth, async (req, res) => {
  try {
    const car = await Car.findOne({ user: req.user.id, _id: req.params.id });

    // Check for ObjectId format and car
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !car) {
      return res.status(404).json({ msg: 'Car not found' });
    }

    await car.remove();
    res.json({ msg: 'Car removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
