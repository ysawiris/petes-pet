"use strict";

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const CommentSchema = new Schema({
    createdAt       : { type: Date }
  , updatedAt       : { type: Date }

  , title           : { type: String, required: true }
  , content         : { type: String, required: true }
  
  , pet            : { type: Schema.Types.ObjectId, ref: 'Pet', required: true }
});

CommentSchema.pre('save', function(next){
  // SET createdAt AND updatedAt
  const now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  
  next();
});

module.exports = mongoose.model('Pet', CommentSchema);