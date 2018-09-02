var express = require('express');
var router = express.Router();

/* GET meeting page. */
router.get('/', function(req, res, next) {
  res.render('videoclub', {
   title: 'smallsociety',
   textColorType: '#F4C0BF',
   backgroundColorType:'#FFE6E5',
   tabelColorType:'#F7DCDC'});
});

module.exports = router;
