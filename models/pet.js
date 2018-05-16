"use strict";

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const PetSchema = new Schema({
    createdAt       : { type: Date }
  , updatedAt       : { type: Date }

  , title           : { type: String, required: true }
  , content         : { type: String, required: true }
  , rating          : { type: Number, required: true }
  , username        : { type: String, required: true } 
  
  , comments        : [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
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