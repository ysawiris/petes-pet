// MODELS
var Pet = require('../models/pet');
var mongoose = require('mongoose');

// PET ROUTES
module.exports = (app) => {

  // INDEX PET
  app.get('/pets', (req, res, next) => {
    Pet.find((err, pets) => {
      res.render('pets-index', { pets: pets });
    });
  });
  
  // NEW PET
  app.get('/pets/new', (req, res, next) => {
    res.render('pets-new');
  });

  // CREATE PET
  app.post('/pets', (req, res, next) => {    
    var pet = new Pet(req.body);
    pet.save((err) => {        
      res.redirect(`/pets/${pet._id}`);
    });
  });
  
  // SHOW PET
  app.get('/pets/:id', (req, res, next) => {
    Pet.findById(req.params.id).exec((err, pet) => {
      return res.render('pets-show', payload);
    }
  });

  // EDIT PET
  app.get('/pets/:id/edit', (req, res, next) => {
    Pet.findById(req.params.id).exec((err, pet) => {
      return res.render('pets-edit', { pet: pet });
    });
  });

  // UPDATE PET
  app.put('/pets/:id', (req, res, next) => {
    Pet.findByIdAndUpdate(req.params.id, req.body).exec((err, pet) => {
      res.redirect(`/pets/${pet._id}`)
    });
  });

  // DELETE PET
  app.delete('/pets/:id', (req, res, next) => {
    Pet.findAndDelete(req.params.id).exec((err, pet) => {
      return res.redirect('/')
    });
  });
}