var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res, next) {
  res.send('Express API working dude!');
});

module.exports = router;
