const { Router } = require('express');
const router = Router();

router.get('/', (req, res)=> res.send('Instructors'))

module.exports = router
