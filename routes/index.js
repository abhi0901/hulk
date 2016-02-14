var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HULK || Smash to create powerful REST API' });
});

module.exports = router;
