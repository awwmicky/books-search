const router = require('express').Router();
// const { Search } = require('../models/');
const search = require('../controllers/search.js');



router.get('/all', search.all)



module.exports = router;