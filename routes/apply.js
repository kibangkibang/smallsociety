var express = require('express');
var router = express.Router();

/* GET apply page. */
router.get('/', function(req, res, next) {
  res.render('apply', { title: 'smallsociety' });
});

module.exports = router;
