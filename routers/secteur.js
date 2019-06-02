var express = require('express')
var root = express.Router()
var secteurm = require('../models/secteurm')
var bcrypt = require("bcryptjs")
var jwt = require('jsonwebtoken')
var config = require('../config')
var vf = require('../verify')

root.post('/add', function (req, res) {
  secteurm.create({
    nom: req.body.nom,
    categorie: req.body.categorie,

  }, function (err, result) {
    if (err) throw err
    res.send(result)

  })

})
root.get('/all', function (req, res) {
  secteurm.find({})
    .populate("categorie")

    .then(function (result) {
      res.send(result)

    }).catch(function (err) {
    res.send(err)
  })

})

root.put('/updt', function (req, res) {

   console.log(req.body._id)
   console.log({
     nom: req.body.nom,
     categorie: req.body.categorie,

   })
  secteurm.findByIdAndUpdate(req.body._id, {
    nom: req.body.nom,
    categorie: req.body.categorie,

  }, function (err, rslt) {

    if (err) {

      res.send(err)
    }
    res.send(rslt)

  })

})
root.get('/allcategories/:name', function (req, res) {

  // console.log({"secteur.nom":  { "$eq" :req.params.name}})
  secteurm.find({"nom": req.params.name}).populate("categorie")
    .then(function (result) {
      res.send(result)
    }).catch(function (err) {

    res.send(err)


  })


})


module.exports = root
