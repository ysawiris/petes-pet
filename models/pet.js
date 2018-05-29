"use strict";

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const PetSchema = new Schema({
    createdAt       : { type: Date }
  , updatedAt       : { type: Date }

  , name            : { type: String, required: true }
  , species         : { type: String }
  , picUrl          : { type: String }
  , picUrlSq        : { type: String } 
  , favoriteFood    : { type: String } 
  , description     : { type: String } 

});

PetSchema.pre('save', function(next){
  // SET createdAt AND updatedAt
  const now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  
  next();
});

module.exports = mongoose.model('Pet', PetSchema);