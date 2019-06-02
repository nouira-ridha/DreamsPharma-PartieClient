var mongoose = require('mongoose')
var validator = require('validator')
var users = mongoose.Schema({
    nom: {
      type: String
    },
    prenom: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      validator: validator.isEmail,
      message: '{VALUE} is not valid email',
      isAsync: false
    },
    password: {
      type: String
    },

    phone: {
      type: Number
    },
    adresse: {
      type: String
    },
    etat: {
      type: Number

    },
   /* listproduit: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produit'
      }

    ] */
  },
  {
    timestamps: true
  })
var user = mongoose.model('user', users)
module.exports = user
