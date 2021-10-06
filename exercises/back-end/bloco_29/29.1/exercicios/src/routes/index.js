const router = require('express').Router();
const plant = require('./plant');

router.use('/plant', plant);
router.use('/plants', plant);

module.exports = router;