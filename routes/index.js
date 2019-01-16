var express = require('express');
var router = express.Router();

const PREFIX = '/stepup';

/* GET home page. */
router.get(PREFIX + '/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
