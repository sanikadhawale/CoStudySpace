const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, 
    required: true
  },
  email: {
    type: String,
    trim: true, 
    required: true
  },
  course: {
    type: String,
    trim: true, 
    required: true
  },
  university: {
    type: String,
    trim: true, 
    required: true
  },
  contact: {
    type: Number,
    trim: true, 
    required: true
  },
  hashed_password: {
    type: String,
    required: true
  },
  salt: String, // long randomly generated complicated string
  created: {
    type: Date,
    default: Date.now()
  }, 
  updated: Date,
  resetPasswordLink: {
    data: String,
    default: ""
  }
});

/**
 * Virtual fields are additional fields for a given model.
 * Their values can e set manually or automaticaally with defined functionality.
 * Keep in mind: virtual properties (password) don't get persisted in the database.
 * they only exist logically and and are not written to the document's collection.
 */

 // virtual field
 userSchema.virtual('password')
 .set(function(password){
  //  create temporary variable callled _password
  this._password = password;
  // generate timestamp
  this.salt = uuidv1();
  // encryptPassword()
  this.hashed_password = this.encryptPassword(password);

})
 .get(function() {
   return this._password;
 });

 // methods
 userSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password
  },

  encryptPassword: function(password) {
    if(!password) return "";
    try{
      return crypto.createHmac('sha1', this.salt)
              .update(password)
              .digest('hex');
    }catch(err) {
      return "";
    }
  }
 };

module.exports = mongoose.model("User", userSchema);