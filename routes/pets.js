var express = require('express');
var router = express.Router();

let pets = require('../json/pets')
let comments = require('../json/comments')

/* GET pets */
router.get('/', function(req, res, next) {
  res.send(pets);
});

/* GET show pet */
router.get('/:index', function(req, res, next) {
  res.render('pets-show', { pet: pets[req.params.index], comments: comments });
});

/* GET new pet form */
router.get('/new', function(req, res, next) {
  res.render('pets-new');
});

/* POST create pet */
router.post('/', function(req, res, next) {
    pets.push(req.body);

    res.redirect('/');
});

/* GET edit pet */
router.get('/:index', function(req, res, next) {
  res.render('pets-edit', { pet: pets[req.params.index]});
});

/* PUT update pet */
router.put('/:index', function(req, res, next) {
  res.redirect(`/pets/${req.params.index}`)
});

/* GET delete pet */
router.delete('/:index', function(req, res, next) {
  res.redirect('/');
});



module.exports = router;
