var express = require('express');
var router = express.Router();

/* GET meeting page. */
router.get('/', function(req, res, next) {
  res.render('information', {
   title: 'smallsociety'});
});

module.exports = router;
