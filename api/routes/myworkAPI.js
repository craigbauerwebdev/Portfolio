var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

router.get('/', function(req, res, next) {
  fetch('http://craigbauer.nyc/wp-json/wp/v2/web')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;
