var express = require('express');
var router = express.Router();

/* GET meeting page. */
router.get('/', function(req, res, next) {
  res.render('bookclub', {
   title: 'smallsociety',
   textColorType: '#FBE8BD',
   backgroundColorType:'#FFF4DA',
   tabelColorType:'#FCEAC5' });
});

module.exports = router;
