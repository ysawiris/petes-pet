var express = require('express');
var router = express.Router({mergeParams: true});

let comments = require('../json/comments')

/* POST create pet */
router.post('/', function(req, res, next) {
    comments.push(req.body);

    res.redirect('/');
});

/* GET delete pet */
router.delete('/:index', function(req, res, next) {
  res.redirect(`/pets/${req.params.id}`);
});



module.exports = router;
