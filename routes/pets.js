var express = require('express');
var router = express.Router();

let pets = require('../json/pets')
let comments = require('../json/comments')


// INDEX
router.get('/', function(req, res, next) {
  res.send(pets);
});

// NEW
router.get('/new', function(req, res, next) {
  res.render('pets-new');
});

// SHOW
router.get('/:index', function(req, res, next) {
  res.render('pets-show', { pet: pets[req.params.index], comments: comments });
});

// CREATE
router.post('/', function(req, res, next) {
    pets.unshift(req.body);

    res.redirect('/');
});

// EDIT
router.get('/:index/edit', function(req, res, next) {
  res.render('pets-edit', { pet: pets[req.params.index]});
});

// UPDATE
router.put('/:index', function(req, res, next) {
  res.redirect(`/pets/${req.params.index}`)
});

// DESTROY
router.delete('/:index', function(req, res, next) {
  res.redirect('/');
});


module.exports = router;
