var express = require('express');
var router = express.Router();

let pets = require('../json/pets')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pets-index', { pets: pets });
});

module.exports = router;
