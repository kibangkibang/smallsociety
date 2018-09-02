var express = require('express');
var router = express.Router();

/* GET meeting page. */
router.get('/', function(req, res, next) {
  res.render('artclub', {
   title: 'smallsociety',
   textColorType: '#97C2B0',
   backgroundColorType:'#e5f0eb',
   tabelColorType:'#97C2B0' });
});

module.exports = router;
