var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* POST login page. */
router.post('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* GET sign-up page. */
router.get('/sign-up', function(req, res, next) {
  res.render('sign-up', { title: 'Express' });
});

/* POST sign-up page. */
router.post('/sign-up', function(req, res, next) {
  res.render('sign-up', { title: 'Express' });
});

module.exports = router;
